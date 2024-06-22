import typographyUtilitiesPlugin from './plugins/typography.ts';

const defConfig = {
	content : [],
}

export default ( config = {} ) => {
	config = { ...defConfig, ...config };

	return {
		content: config.content,
		theme: {},
		plugins: [
			typographyUtilitiesPlugin
		],
	}
}
