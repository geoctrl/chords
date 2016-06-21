export default function() {

	let ctrl = function() {
		let vm = this;
	};

	let template = `
		<div>
			<chord chord-id="true?'c':''"></chord>
			<chord chord-id="true?'cm':''"></chord>
			<chord chord-id="true?'c6':''"></chord>
			<chord chord-id="true?'c69':''"></chord>
			<chord chord-id="true?'c7':''"></chord>
			<chord chord-id="true?'c9':''"></chord>
			<chord chord-id="true?'cadd9':''"></chord>
			<chord chord-id="true?'cmaj7':''"></chord>
			<chord chord-id="true?'csus2':''"></chord>
			<chord chord-id="true?'c7sus4':''"></chord>
			<chord chord-id="true?'cmadd9':''"></chord>
			<chord chord-id="true?'cm7':''"></chord>
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