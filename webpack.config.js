const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: "development",
  devServer : {
    port: 9002,
    hot: true,
    historyApiFallback: true,
  },
  target: 'web', 
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
        extensions: [".js", ".ts"],
        modules: [
            path.join(__dirname, 'node_modules')
        ]
    },
    module: {
        rules: [
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
            },
          ]
      }
};