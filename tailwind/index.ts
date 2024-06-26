
import TailwindConfigBuilder from './builder.ts';
import colorsConfig from './theme/colors.ts';
import typographyUtilitiesPlugin from './plugins/typography.ts';
import roundedUtilitiesPlugin from './plugins/rounded.ts';
import borderRadiusConfig from './plugins/rounded-classes.json' assert { type: 'json' };

export default ( customizer ) => {
	const builder = new TailwindConfigBuilder();

	builder.setColors( colorsConfig );
	builder.setBorderRadius( borderRadiusConfig );

	builder.addPlugin( typographyUtilitiesPlugin );
	builder.addPlugin( roundedUtilitiesPlugin );

	customizer( builder );
	return builder.build();
}