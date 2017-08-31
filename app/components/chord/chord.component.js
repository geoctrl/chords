import Vue from 'vue';
import * as d3 from 'd3';
import _isNull from 'lodash/isNull';
import { chordMap } from './chord.map';

export const ChordComponent = Vue.component('chord', {

  props: ['chordId'],
  template: `<div class="chord"><div class="chord__name">{{chordName}}<svg ref="svg"></svg></div></div>`,

  mounted() {
    this.svg = d3.select(this.$refs.svg);
    this.svg.attr('height', this.height + (this.padding.top + this.padding.bottom))
        .attr('width', this.width + (this.padding.left + this.padding.right));
    this.build(this.chordId);
  },

  data() {
    return {
      width: 70,
      height: 90,
      padding: {top: 20, left: 20, right: 20, bottom: 20},
      color: { grey:'#808080', blue:'#517F89' },
      stringArray: ['E', 'A', 'D', 'G', 'B', 'e'],
      fretArray: [1,1,1,1,1,1],
      svg: null,

      chordName: '',
      chordExt: ''
    }
  },

  methods: {
    build(chordId) {

      let strings = this.svg.append('g'),
          frets = this.svg.append('g'),
          fingers = this.svg.append('g'),
          mutes = this.svg.append('g'),
          fretNum = this.svg.append('text'),
          wrap = this.svg.append('path');

      if (!chordId) throw `[Chord Error] A valid "chord" attribute is required`;
      let chord = chordMap[chordId];
      if (!chord) throw `[Chord Error] Chord "${chordId}" does not exist`;

      let spaceBetweenStrings = this.width/(this.stringArray.length-1);
      let spaceBetweenFrets = this.height/(this.fretArray.length-1);
      this.chordName = chord.name.slice(0, 1);
      this.chordExt = chord.name.length > 1 ? chord.name.slice(1) : '';

      // build strings
      strings.selectAll('line')
          .data(this.stringArray)
          .enter()
          .append('line')
          .attr('x1', (d, i) => (spaceBetweenStrings*i)+this.padding.left)
          .attr('x2', (d, i) => (spaceBetweenStrings*i)+this.padding.left)
          .attr('y1', this.padding.top)
          .attr('y2', this.height + this.padding.top)
          .attr('stroke', this.color.grey);

      // build last fret
      frets.selectAll('line')
          .data(this.fretArray)
          .enter()
          .append('line')
          .attr('x1', this.padding.left - .5)
          .attr('x2', this.width + this.padding.left + .5)
          .attr('y1', (d, i) => (spaceBetweenFrets*i)+this.padding.top)
          .attr('y2', (d, i) => (spaceBetweenFrets*i)+this.padding.top)
          .attr('stroke', this.color.grey)
          .attr('stroke-width', (d, i) => {
            // make width look like nut if fret number exists
            return i === 0 && !chord.fret ? 7 : 1
          });

      // build finger placement
      fingers.selectAll('circle')
          .data(chord.strings)
          .enter()
          .append('circle')
          .attr('cx', (d, i) => (spaceBetweenStrings*i)+this.padding.left)
          .attr('cy', d => {
            if (d && d > 0) {
              return (spaceBetweenFrets*d)+this.padding.top - ((this.height/(this.fretArray.length-1))/2)
            } else if (d===0) {
              return this.padding.top - 11;
            } else {
              return -10;
            }
          })
          .attr('r', 4)
          .attr('fill', (d, i) => d && d > 0 ? this.color.blue : '#fff')
          .attr('stroke', d => d && d > 0 ? this.color.blue : '#b3b3b3')
          .attr('stroke-width', 1);

      // build mutes
      mutes.selectAll('g')
          .data(chord.strings)
          .enter()
          .append('g')
          .attr('width', 8)
          .attr('height', 8)
          .style('transform', (d, i) => `translate(${(spaceBetweenStrings*i)+this.padding.left-3}px, ${_isNull(d) ? `${this.padding.top-11}` : '-100'}px)`)
          .selectAll('rect')
          .data([1,1])
          .enter()
          .append('rect')
          .attr('height', 1)
          .attr('width', 7)
          .attr('x', 0)
          .attr('y', 0)
          .attr('fill', '#a3a3a3')
          .style('transform', (d, i) => `rotate(${i===0 ? 45 : -45}deg)`)
          .style('transform-origin', '3.5px .5px');


      if (chord.wrap) {
        // start & end position
        let mX = this.padding.left + (spaceBetweenStrings*(chord.wrap[0]-1));
        let mY = this.padding.top + (spaceBetweenFrets*(chord.wrap[2])) - spaceBetweenFrets + 2;
        // position 1
        let p1X = this.padding.left + (spaceBetweenStrings*(chord.wrap[1]-1));
        let p1Y = this.padding.top + (spaceBetweenFrets*(chord.wrap[2])) - spaceBetweenFrets + 2;
        // quad curve
        let q1X = ((p1X - mX)/2) + mX; // center between two points
        let q1Y = this.padding.top + (spaceBetweenFrets*(chord.wrap[2])) - (spaceBetweenFrets) - ((chord.wrap[1]-chord.wrap[0])*2);


        // build wrap
        wrap.attr('d', `M ${mX} ${mY} Q ${q1X} ${q1Y} ${p1X} ${p1Y} Q ${q1X} ${q1Y-4} ${mX} ${mY} Z`)
            .attr('fill', this.color.blue)
            .attr('stroke', this.color.blue)
            .attr('stroke-linecap', 'round');
      }

      if (chord.fret) {
        fretNum.text(chord.fret)
            .attr('fill', this.color.grey)
            .attr('x', this.padding.left - 4)
            .attr('y', this.padding.top + (spaceBetweenFrets/2) + 4.5)
            .attr('text-anchor', 'end')
            .style('font-weight', 500)
            .style('font-size', 12)
      }

    }
  }
});