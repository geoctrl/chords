export default function() {

	let ctrl = function() {
		let vm = this;
	};

	let template = `
		<div>
			<chord chord-id="'c7flat9'"></chord>
			<chord chord-id="'cd'"></chord>
			<chord chord-id="'ce'"></chord>
			<chord chord-id="'cf'"></chord>
			<chord chord-id="'cg'"></chord>
			<chord chord-id="'cb'"></chord>
			<chord chord-id="'cbflat'"></chord>
			<chord chord-id="'c7g'"></chord>
			<chord chord-id="'csharp'"></chord>
			<chord chord-id="'csharpm'"></chord>
			<chord chord-id="'csharp7'"></chord>
			<chord chord-id="'csharpmaj7'"></chord>
			<chord chord-id="'csharpm7'"></chord>
			<chord chord-id="'csharpsus4'"></chord>
			<chord chord-id="'csharp11'"></chord>
			<chord chord-id="'csharpesharp'"></chord>
			<tablature>
				
			</tablature>
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