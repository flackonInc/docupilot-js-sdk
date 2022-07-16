const path = require('path');

const config = {
  entry: './src/sideload.ts',
  target: ['web', 'es5'],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
  output: {
    filename: 'docupilot-js.es5.min.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'var',
    library: 'DocupilotAPI'
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'inline-source-map';
    config.output.filename = 'docupilot-js.es5.js';
  }
  return config;
};
