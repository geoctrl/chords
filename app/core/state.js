import _forEach from 'lodash/forEach';

export default class {
	constructor(scope, controller) {
		this.__scope = scope;
		this.__controller = controller?controller:scope;

		if (!this.__scope) {
			throw new Error(`[state class] requires the controller $scope as the first argument`);
		}

		if (!this.__controller) {
			throw new Error(`[state class] requires the controller lexical "this" as the second argument`);
		}

		// initialize state
		this.__controller.state = {};
	};

	/**
	 * set states
	 * replaces current state item(s) completely
	 * @param newStates
	 * @param callback (optional)
	 */
	set(newStates, callback) {
		this.__scope.$evalAsync(() => {
			_forEach(newStates, (val, key) => {
				this.__controller.state[key] = val;
			});
			if (callback) {
				callback(this.__controller.state);
			}
		});
	};
};