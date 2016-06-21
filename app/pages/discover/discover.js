export default function() {

	let ctrl = function() {
		let vm = this;
		vm.c = 'ebsus4';
		vm.d = 'd';
		vm.cm = 'cm';
	};

	let template = `
		<div>
			<chord chord-id="discover.c"></chord>
			<chord chord-id="discover.d"></chord>
			<chord chord-id="discover.cm"></chord>
		</div>
	`;

	return {
		scope: {

		},
		controller: ctrl,
		controllerAs: 'discover',
		template: template
	}
}