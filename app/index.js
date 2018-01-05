import Vue from 'vue';
import { svgSymbols } from './components/icons/svg-symbols';
import * as components from './components';

import { chordMap } from './components/chord/chord.map';

// import Tone from 'tone';

// var synth = new Tone.PolySynth(6, Tone.Synth).toMaster();
// //set the attributes using the set interface
// //play a chord
//
//
//
// var loop = new Tone.Loop(function(time){
//   //triggered every eighth note.
//   synth.triggerAttackRelease(["C3", "e4", 'g4'], "8n");
// }, "2n").start(0);
// Tone.Transport.start();


import './styles/main.scss';
import 'core-js/es6/promise';
import 'core-js/es6/object';

new Vue({
  el: '#app',
  components,
  template:
`<div>
    ${svgSymbols}
    <chord v-for="(chord, chordId) in chords" :chord-id="chordId" key="chordId"></chord>
</div>`,

  data() {
    return {
      chords: chordMap
    }
  }
});