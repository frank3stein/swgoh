// const StylexPlugin = require('@stylexjs/webpack-plugin');
// const path = require('path');

// module.exports = {
//     webpack: (
//       config,
//       { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
//     ) => {
//       // Important: return the modified config
//       const config = (env, argv) => ({
//         entry: {
//           main: './pages/index.js',
//         },
//         output: {
//           path: path.resolve(__dirname, '.build'),
//           filename: '[name].js',
//         },
//         module: {
//           rules: [
//             {
//               test: /\.js$/,
//               exclude: /node_modules/,
//               use: 'babel-loader',
//             },
//           ],
//         },
//         plugins: [
//           // Ensure that the stylex plugin is used before Babel
//           new StylexPlugin({
//             filename: 'styles.css',
//             // get webpack mode and set value for dev
//             dev: argv.mode === 'development',
//             // optional. default: 'x'
//             classNamePrefix: 'x',
//             // Required for CSS variable support
//             unstable_moduleResolution: {
//               // type: 'commonJS' | 'haste'
//               // default: 'commonJS'
//               type: 'commonJS',
//               // The absolute path to the root directory of your project
//               rootDir: __dirname,
//             },
//           }),
//         ],
//         cache: true,
//       });
//       return config
//     },
//   }