import TailwindConfigBuilder from './builder';

// Plugins
import typographyUtilitiesPlugin from './plugins/typography';
import roundedUtilitiesPlugin from './plugins/rounded';

// Configs
import borderRadiusConfig from './configs/border-radius.json' assert { type: 'json' };
import boxShadowConfig from './configs/box-shadow.json' assert { type: 'json' };

import colorsConfig from './configs/colors.json';

export default ( customizer: ( builder: TailwindConfigBuilder ) => void ) => {
	const builder = new TailwindConfigBuilder();

	builder.setColors( colorsConfig );
	builder.setBorderRadius( borderRadiusConfig );
	builder.setBoxShadow( boxShadowConfig );

	builder.addPlugin( typographyUtilitiesPlugin );
	builder.addPlugin( roundedUtilitiesPlugin );

	customizer( builder );

	return builder.build();
}