import typographyPlugin from './plugins/typography';

let defConfig = {
	content : [],
}

export default ( config = {} ) => {
	config = { ...defConfig, ...config };

	return {
		content: config.content,
		theme: {},
		plugins: [
			typographyPlugin
		],
	}
}
