const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ARnft.js',
    library: 'ARnft',
    libraryTarget: 'umd',
    // @see: https://github.com/webpack/webpack/issues/3929
    libraryExport: 'default',
    // @see: https://github.com/webpack/webpack/issues/6522
    globalObject: 'this'
  },
  externals: {
    three: {
      commonjs: 'three',
      commonjs2: 'three',
      amd: 'three',
      root: 'THREE' // indicates global variable
    },
    stats: {
      commonjs: 'stats.js',
      commonjs2: 'stats.js',
      amd: 'stats.js',
      root: 'Stats' // indicates global variable
    }
  },
  module: {
    rules: [
      {
        test: /\worker\.js$/,
        use: {
          loader: 'worker-loader',
          options: { inline: 'no-fallback' }
        }
      }
    ]
  }
}
