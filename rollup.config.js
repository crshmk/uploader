import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import { uglify } from 'rollup-plugin-uglify'

export default {
  input: './src/index.js',
  output: {
    dir: './dist',
    format: 'cjs',
    name: 'bundle'
  },
  preserveModules: true,
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    postcss({
      sourceMap: true,
      extract: true,
      minimize: true
  }),
    commonjs()
  ],
  external: ['ramda', 'react', 'ramjam']
}
