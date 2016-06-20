import config from './config';
import discover from './discover';

export default function(app) {
	app.config(config);
	app.directive('discover', discover);
}