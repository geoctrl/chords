import chordMap from './chord-map';

export default function() {
	
	let ctrl = function($element) {

		let vm = this;

		let width =  70,
				height = 110,
				padding = {top: 20, left: 20, right: 20, bottom: 20},
				grey = '#808080',
				stringArray = ['E', 'A', 'D', 'G', 'B', 'e'],
				fretArray = [1,1,1,1,1,1,1];

		let svg = d3.select($element[0]).append('svg');

		svg.attr('height', height + (padding.top + padding.bottom))
				.attr('width', width + (padding.left + padding.right));

		let strings = svg.append('g'),
				frets = svg.append('g'),
				fingers = svg.append('g');

		function build(chordId) {

			// get chord
			let chord = vm.data = chordMap[chordId];
			console.log(chord);

			// build strings
			strings.selectAll('line')
					.data(stringArray)
					.enter()
					.append('line')
					.attr('x1', (d, i) => ((width/(stringArray.length-1))*i)+padding.left)
					.attr('x2', (d, i) => ((width/(stringArray.length-1))*i)+padding.left)
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
					.attr('y1', (d, i) => ((height/(fretArray.length-1))*i)+padding.top)
					.attr('y2', (d, i) => ((height/(fretArray.length-1))*i)+padding.top)
					.attr('stroke', grey)
					.attr('stroke-width', (d, i) => {
						return i == 0 && chord.fret == 0 ? 7 : 1
					});

			// build finger placement
			fingers.selectAll('circle')
					.data(chord.strings)
					.enter()
					.append('circle')
					.attr('cx', (d, i) => ((width/(stringArray.length-1))*i)+padding.left)
					.attr('cy', d => {
						if (d && d > 0) {
							return ((height/(fretArray.length-1))*d)+padding.top - ((height/(fretArray.length-1))/2)
						} else if (d==0) {
							return padding.top - 11;
						} else {
							return -10;
						}
					})
					.attr('r', 4)
					.attr('fill', (d, i) => d && d > 0 ? '#517F89' : '#fff')
					.attr('stroke', d => d && d > 0 ? '#517F89' : '#b3b3b3')
					.attr('stroke-width', 2);

		}

		build('c');
	};
	
	let template = `<div>{{chord.data.name}}</div>`;
	
	return {
		restrict: 'E',
		scope: {
			chordId: '=',
			help: '='
		},
		controller: ctrl,
		controllerAs: 'chord',
		template: template
	}
}