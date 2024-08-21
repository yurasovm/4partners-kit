import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import { copyFileSync, mkdirSync, readdirSync } from 'fs';

export default defineConfig({
	plugins: [
		react(),
		dts({ include: ['src'] }),
		{
			name: 'copy-tv-configs',
			generateBundle() {
				const srcDir = resolve(__dirname, 'src/tv-configs');
				const outDir = resolve(__dirname, 'dist/tv-configs');
				mkdirSync(outDir, { recursive: true });

				readdirSync(srcDir).forEach( file => {
					if ( file.endsWith('.json') ) {
						copyFileSync( resolve( srcDir, file ), resolve( outDir, file ) );
					}
				});
			}
		}
	],
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: '4PartnersKit',
			formats: ['es', 'cjs'],
			fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`,
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
				},
				generatedCode: 'es5'
			},
		},
	},
});