// require app styles
import './sass/main.scss';

// require vendor dependencies
import angular from 'angular';
import 'angular-local-storage';
import 'angular-ui-router';
import 'd3';

// polyfill the Promise global
import promise from 'es6-promise';
promise.polyfill();

var app = angular.module('chords', [

  // vendor dependencies
  'LocalStorageModule',
  'ui.router'

]);

// app components
import core from './core';
import services from './services';
import components from './components';
import filters from './filters';
import pages from './pages';

core(app);
services(app);
components(app);
filters(app);
pages(app);
