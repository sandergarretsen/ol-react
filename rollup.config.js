import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js',
  output: [
    {
      file: './dist/bundle.es.js',
      format: 'es',
    },
    {
      file: './dist/bundle.cjs.js',
      format: 'cjs',
    },
  ],
  external: ext => ['react', 'ol'].indexOf(ext.split('/')[0]) !== -1,
  plugins: [
    // resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs(),
  ],
};
