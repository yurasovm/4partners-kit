import json from './typography.json' assert { type: 'json' };

export default function({ addUtilities }) {
	addUtilities( json )
}