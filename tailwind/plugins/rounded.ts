import roundedTheme from './rounded-theme' assert { type: 'json' };
import roundedClasses from './rounded-classes' assert { type: 'json' };

export default ({ addComponents, theme }) => {
	theme = {...theme, ...roundedTheme};
	addComponents( theme );
	addComponents( roundedClasses );
};