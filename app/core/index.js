import config from './config';
import run from './run';
import interceptors from './interceptors';

export default function(app) {
  app.config(config);
  app.run(run);
	app.service('interceptors', interceptors);
};
