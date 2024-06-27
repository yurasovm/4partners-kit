
import TailwindConfigBuilder from './builder.ts';

// Plugins
import typographyUtilitiesPlugin from './plugins/typography.ts';
import roundedUtilitiesPlugin from './plugins/rounded.ts';

// Configs
import borderRadiusConfig from './plugins/configs/border-radius.json' assert { type: 'json' };
import colorsConfig from './plugins/configs/colors.json';

export default ( customizer ) => {
	const builder = new TailwindConfigBuilder();

	builder.setColors( colorsConfig );
	builder.setBorderRadius( borderRadiusConfig );

	builder.addPlugin( typographyUtilitiesPlugin );
	builder.addPlugin( roundedUtilitiesPlugin );

	customizer( builder );
	return builder.build();
}