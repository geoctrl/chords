/**
 * Explanation
 *
 * name:    the name of the chord (html characters allowed
 *
 * fret:    the root fret number
 *
 * strings: an array to tell what is happening on each string
 *             0 = play open
 *           > 0 = finger press on specific fret
 *          null = don't play (mute)
 *
 * wrap:    an array of three to show a finger wrap between two strings and on what fret
 */


export default {
	'c': {
		name: 'C',
		strings: [null, 3, 2, 0, 1, 0]
	},
	'cm': {
		name: 'Cm',
		strings: [null, 3, 5, 5, 4, 3],
		wrap: [2, 6, 3]
	},
	'c6': {
		name: 'C6',
		strings: [null, 3, 2, 2, 1, 0]
	},
	'c69': {
		name: 'C6/9',
		strings: [null, 3, 2, 2, 3, 3],
		wrap: [3, 4, 2]
	},
	'c7': {
		name: 'C7',
		strings: [null, 3, 2, 3, 1, 0]
	},
	'c9': {
		name: 'C9',
		strings: [null, 3, 2, 3, 3, 3],
		wrap: [4, 6, 3]
	},
	'cadd9': {
		name: 'Cadd9',
		strings: [null, 3, 2, 0, 3, 0]
	},
	'cmaj7': {
		name: 'Cmaj7',
		strings: [null, 3, 2, 0, 0, 0]
	},
	'csus2': {
		name: 'Csus2',
		strings: [null, 1, 3, 3, 1, 1],
		fret: 3,
		wrap: [2, 6, 1]
	},
	'csus4': {
		name: 'Csus4',
		strings: [null, 1, 3, 3, 4, 1],
		fret: 3,
		wrap: [2, 6, 1]
	},
	'c7sus4': {
		name: 'C7sus4',
		strings: [null, 1, 3, 1, 4, 1],
		fret: 3,
		wrap: [2, 6, 1]
	},
	'cmadd9': {
		name: 'Cmadd9',
		strings: [null, 3, 1, 0, 3, 3]
	},
	'cm7': {
		name: 'Cm7',
		strings: [null, 3, 5, 3, 4, 3],
		wrap: [2, 6, 3]
	},



	

	'd': {
		name: 'D',
		strings: [null, null, 0, 2, 3, 2]
	},
	'ebsus4': {
		name: 'E&#9837;sus4',
		fret: 6,
		strings: [null, 1, 3, 3, 4, 1],
		wrap: [2, 6, 1]
	}
}