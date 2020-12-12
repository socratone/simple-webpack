const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'web',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
    open: true, // 자동으로 브라우저를 띄운다.
  },
};
