import plugin from 'tailwindcss/plugin';
import json from './typography.json';

export default plugin(function({ addUtilities }) {
	addUtilities( json )
});