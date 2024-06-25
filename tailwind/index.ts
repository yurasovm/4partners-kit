
import TailwindConfigBuilder from './builder.ts';
import typographyUtilitiesPlugin from './plugins/typography.ts';
import colorsConfig from './theme/colors.ts';

export default ( customizer ) => {
	const builder = new TailwindConfigBuilder();

	builder.setColors( colorsConfig );
	builder.addPlugin( typographyUtilitiesPlugin );

	customizer( builder );
	return builder.build();
}