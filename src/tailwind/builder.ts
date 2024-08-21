export default class TailwindConfigBuilder {
	constructor() {
		this.config = {
			content: [],
			theme: {
			},
			variants: {},
			plugins: [],
		};
	}

	setColors( colorsConfig ) {
		this.config.theme.colors = colorsConfig;
		return this;
	}

	setBorderRadius( borderRadiusConfig ) {
		this.config.theme.borderRadius = borderRadiusConfig;
		return this;
	}

	setExtend( extendConfig ) {
		this.config.theme.extend = extendConfig;
		return this;
	}

	setContent(contentConfig) {
		this.config.content = contentConfig;
		return this;
	}

	setTheme(themeConfig) {
		this.config.theme = themeConfig;
		return this;
	}

	setVariants(variantsConfig) {
		this.config.variants = variantsConfig;
		return this;
	}

	addPlugin( plugin ) {
		this.config.plugins.push( plugin );
		return this;
	}

	mergeConfig( config ) {
		this.config = { ...this.config, ...config };
		return this;
	}

	build() {
		return { ...this.config };
	}
}