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
		fret: 0,
		strings: [null, 3, 2, 0, 1, 0]
	},
	'cm': {
		name: 'Cm',
		fret: 0,
		strings: [null, 3, 5, 5, 4, 3],
		wrap: [2, 6, 3]
	},

	'd': {
		name: 'D',
		fret: 0,
		strings: [null, null, 0, 2, 3, 2]
	},
	'ebsus4': {
		name: 'E&#9837;sus4',
		fret: 6,
		strings: [null, 1, 3, 3, 4, 1],
		wrap: [2, 6, 1]
	}
}