import typescript from '@rollup/plugin-typescript'
import url from '@rollup/plugin-url'
import json from '@rollup/plugin-json'
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
    external: ['react', 'tailwind-variants', 'tailwind-merge', 'clsx'],
    plugins: [
      json(),
      typescript({
        tsconfig: './tsconfig.json',
        module: 'esnext'
      }),
      url(),
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
