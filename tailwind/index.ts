
import TailwindConfigBuilder from './builder.ts';
import colorsConfig from './theme/colors.ts';
import typographyUtilitiesPlugin from './plugins/typography.ts';
import roundedUtilitiesPlugin from './plugins/rounded.ts';

export default ( customizer ) => {
	const builder = new TailwindConfigBuilder();

	builder.setColors( colorsConfig );
	builder.addPlugin( typographyUtilitiesPlugin );
	builder.addPlugin( roundedUtilitiesPlugin );

	customizer( builder );
	return builder.build();
}