import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import url from '@rollup/plugin-url'
import json from '@rollup/plugin-json'
import svgr from '@svgr/rollup'
import terser from '@rollup/plugin-terser'
import dts from 'rollup-plugin-dts'
import packageJson from './package.json' assert { type: 'json' }

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.module,
        format: 'cjs'
      },
      {
        file: packageJson.main,
        format: 'esm'
      }
    ],
    external: ['react'],
    plugins: [
		json(),
      typescript({
        tsconfig: './tsconfig.json',
      }),
    //   postcss({
    //     extract: 'index.css',
    //     modules: true,
    //     use: ['sass'],
    //     minimize: true
    //   }),
      url(),
    //   svgr({ icon: true }),
      terser()
    ]
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: packageJson.types, format: 'esm' }],
    external: [/\.(css|scss)$/],
    plugins: [dts()]
  }
]