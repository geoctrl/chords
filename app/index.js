import Vue from 'vue';

import './styles/main.scss';
import 'core-js/es6/promise';
import 'core-js/es6/object';

import { svgSymbols } from './components/icons/svg-symbols';
import * as components from './components';

new Vue({
  el: '#app',
  components,
  template:
`<div>
    ${svgSymbols}
    
    <chord :chord-id="'c'"></chord>
	  <chord :chord-id="'cm'"></chord>
	  <chord :chord-id="'csus4'"></chord>
</div>`
});