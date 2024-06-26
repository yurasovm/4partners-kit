import roundedTheme from './rounded-theme.json' assert { type: 'json' };
import roundedClasses from './rounded-classes.json' assert { type: 'json' };

export default ({ addComponents, theme }) => {
	theme = {...theme, ...roundedTheme};
	addComponents( theme );
	addComponents( roundedClasses );
};