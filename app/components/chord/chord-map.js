/**
 * Explanation
 *
 * name:    the name of the chord (html characters allowed)
 *
 * fret:    the root fret number
 *
 * strings: an array to tell what is happening on each string
 *             0 = play open
 *            0< = finger press on specific fret
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

	'cm11': {
		name: 'Cm11',
		strings: [null, 3, null, 3, 4, 1]
	},
	'c13': {
		name: 'C13',
		strings: [null, 3, 2, 3, 3, 5],
		wrap: [4, 5, 3]
	},
	'c7flat9': {
		name: 'C7&#9837;9',
		strings: [null, 3, 2, 3, 2, 3],
		wrap: [3, 5, 2]
	},
	'cd': {
		name: 'C/D',
		strings: [null, null, 0, 0, 1, 0]
	},
	'ce': {
		name: 'C/E',
		strings: [0, 3, 2, 0, 1, 0]
	},

	'cf': {
		name: 'C/F',
		strings: [1, null, null, 0, 1, 0]
	},

	'cg': {
		name: 'C/G',
		strings: [3, 3, 2, 0, 1, 0]
	},

	'cb': {
		name: 'C/B',
		strings: [null, 2, 2, 0, 1, 0]
	},

	'cbflat': {
		name: 'C/B&#9837;',
		strings: [null, 1, 2, 0, 1, 0]
	},

	'c7g': {
		name: 'C7/G',
		strings: [3, null, 2, 3, 1, 0]
	},

	'csharp': {
		name: 'C&#9839;',
		fret: 4,
		strings: [null, 1, 3, 3, 3, 1],
		wrap: [2, 6, 1]
	},

	'csharpm': {
		name: 'C&#9839;m',
		fret: 4,
		strings: [null, 1, 3, 3, 2, 1],
		wrap: [2, 6, 1]
	},

	'csharp7': {
		name: 'C&#9839;7',
		fret: 4,
		strings: [null, 1, 3, 1, 3, 1],
		wrap: [2, 6, 1]
	},

	'csharpmaj7': {
		name: 'C&#9839;maj7',
		fret: 4,
		strings: [null, 1, 3, 2, 3, 1],
		wrap: [2, 6, 1]
	},

	'csharpm7': {
		name: 'C&#9839;m7',
		fret: 4,
		strings: [null, 1, 3, 1, 2, 1],
		wrap: [2, 6, 1]
	},

	'csharpsus4': {
		name: 'C&#9839;sus4',
		fret: 4,
		strings: [null, 1, 3, 3, 4, 1],
		wrap: [2, 6, 1]
	},

	'csharp11': {
		name: 'C&#9839;11',
		fret: 4,
		strings: [null, 1, 1, 1, 1, 1],
		wrap: [2, 6, 1]
	},

	'csharpesharp': {
		name: 'C&#9839;/E&#9839;',
		fret: 6,
		strings: [null, 3, 1, 1, 1, null],
		wrap: [2, 6, 1]
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