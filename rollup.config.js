import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';

const production = !process.env.ROLLUP_WATCH;

export default {
    input: {
        main: 'src/js/main.js'
    },
    output: {
        dir: 'public',
        entryFileNames: 'js/[name].min.js',
        format: 'es',
        sourcemap: !production
    },
    plugins: [
        nodeResolve({ browser: true }),
        commonjs(),
        postcss({
            extract: 'css/main.min.css',
            minimize: production,
            config: './postcss.config.js'
        }),
        production && terser()
    ]
};
