import chordMap from './chord-map';
import _isNull from 'lodash/isNull';

export default function() {
	
	let ctrl = function($element) {

		let vm = this;

		let width =  70,
				height = 90,
				padding = {top: 20, left: 20, right: 20, bottom: 20},
				grey = '#808080',
				blue = '#517F89',
				stringArray = ['E', 'A', 'D', 'G', 'B', 'e'],
				fretArray = [1,1,1,1,1,1];

		let svg = d3.select($element[0]).append('svg');

		svg.attr('height', height + (padding.top + padding.bottom))
				.attr('width', width + (padding.left + padding.right));

		let strings = svg.append('g'),
				frets = svg.append('g'),
				fingers = svg.append('g'),
				mutes = svg.append('g'),
				fretNum = svg.append('text'),
				wrap = svg.append('path');

		function build(chordId) {

			if (!chordId) throw `[Chord Error] A valid "chord" attribute is required`;
			let chord = chordMap[chordId];
			if (!chord) throw `[Chord Error] Chord "${chordId}" does not exist`;

			let spaceBetweenStrings = width/(stringArray.length-1);
			let spaceBetweenFrets = height/(fretArray.length-1);
			vm.chordName = chord.name.slice(0, 1);
			vm.chordExt = chord.name.length > 1 ? chord.name.slice(1) : '';

			// build strings
			strings.selectAll('line')
					.data(stringArray)
					.enter()
					.append('line')
					.attr('x1', (d, i) => (spaceBetweenStrings*i)+padding.left)
					.attr('x2', (d, i) => (spaceBetweenStrings*i)+padding.left)
					.attr('y1', padding.top)
					.attr('y2', height + padding.top)
					.attr('stroke', grey);

			// build last fret
			frets.selectAll('line')
					.data(fretArray)
					.enter()
					.append('line')
					.attr('x1', padding.left - .5)
					.attr('x2', width + padding.left + .5)
					.attr('y1', (d, i) => (spaceBetweenFrets*i)+padding.top)
					.attr('y2', (d, i) => (spaceBetweenFrets*i)+padding.top)
					.attr('stroke', grey)
					.attr('stroke-width', (d, i) => {
						// make width look like nut if fret number exists
						return i == 0 && !chord.fret ? 7 : 1
					});

			// build finger placement
			fingers.selectAll('circle')
					.data(chord.strings)
					.enter()
					.append('circle')
					.attr('cx', (d, i) => (spaceBetweenStrings*i)+padding.left)
					.attr('cy', d => {
						if (d && d > 0) {
							return (spaceBetweenFrets*d)+padding.top - ((height/(fretArray.length-1))/2)
						} else if (d==0) {
							return padding.top - 11;
						} else {
							return -10;
						}
					})
					.attr('r', 4)
					.attr('fill', (d, i) => d && d > 0 ? blue : '#fff')
					.attr('stroke', d => d && d > 0 ? blue : '#b3b3b3')
					.attr('stroke-width', 1);
			
			// build mutes
			mutes.selectAll('g')
					.data(chord.strings)
					.enter()
					.append('g')
					.attr('width', 8)
					.attr('height', 8)
					.style('transform', (d, i) => `translate(${(spaceBetweenStrings*i)+padding.left-3}px, ${_isNull(d) ? `${padding.top-11}` : '-100'}px)`)
					.selectAll('rect')
					.data([1,1])
					.enter()
					.append('rect')
					.attr('height', 1)
					.attr('width', 7)
					.attr('x', 0)
					.attr('y', 0)
					.attr('fill', '#a3a3a3')
					.style('transform', (d, i) => `rotate(${i==0 ? 45 : -45}deg)`)
					.style('transform-origin', '3.5px .5px');


			if (chord.wrap) {
				// start & end position
				let mX = padding.left + (spaceBetweenStrings*(chord.wrap[0]-1));
				let mY = padding.top + (spaceBetweenFrets*(chord.wrap[2])) - spaceBetweenFrets + 2;
				// position 1
				let p1X = padding.left + (spaceBetweenStrings*(chord.wrap[1]-1));
				let p1Y = padding.top + (spaceBetweenFrets*(chord.wrap[2])) - spaceBetweenFrets + 2;
				// quad curve
				let q1X = ((p1X - mX)/2) + mX; // center between two points
				let q1Y = padding.top + (spaceBetweenFrets*(chord.wrap[2])) - (spaceBetweenFrets) - ((chord.wrap[1]-chord.wrap[0])*2);


				// build wrap
				wrap.attr('d', `M ${mX} ${mY} Q ${q1X} ${q1Y} ${p1X} ${p1Y} Q ${q1X} ${q1Y-4} ${mX} ${mY} Z`)
						.attr('fill', blue)
						.attr('stroke', blue)
						.attr('stroke-linecap', 'round');
			}

			if (chord.fret) {
				fretNum.text(chord.fret)
						.attr('fill', grey)
						.attr('x', padding.left - 4)
						.attr('y', padding.top + (spaceBetweenFrets/2) + 4.5)
						.attr('text-anchor', 'end')
						.style('font-weight', 500)
						.style('font-size', 12)
			}

		}

		build(vm.chordId);
	};
	
	let template = `<div class="chord__name">{{chord.chordName}}<span ng-bind-html="chord.chordExt"></span></div>`;
	
	return {
		restrict: 'E',
		scope: {
			chordId: '=',
			help: '='
		},
		controller: ctrl,
		controllerAs: 'chord',
		bindToController: true,
		template: template
	}
}