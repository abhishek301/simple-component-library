import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import { visualizer } from 'rollup-plugin-visualizer';
import url from '@rollup/plugin-url';

const packageJson = JSON.parse(
  await import('fs').then(fs => 
    fs.readFileSync('./package.json', 'utf8')
  )
);

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    external: ['react', 'react-dom'], // Ensure these aren't bundled
    plugins: [
      peerDepsExternal(), // helpful for common deps
      resolve(),
      commonjs(),
      url({
        include: ['**/*.woff', '**/*.woff2', '**/*.ttf', '**/*.otf'],
        limit: 0, // Always emit files, don't inline
        fileName: 'fonts/[name][extname]',
      }),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/*.test.tsx', '**/*.test.ts', '**/*.stories.tsx'],       
      }),
      postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top',
        },
      }),
       visualizer({ filename: 'bundle-stats.html', open: true }),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/, /\.woff2?$/, /\.ttf$/, /\.otf$/],
  },
];