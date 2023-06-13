const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title:'饥人谷前端体系课 - webpack 专题',
      template:'./src/index.html'
    })
  ],
  module: {  
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        // css-loader => 把 css 变成 JS 字符串
        // js-loader => 把 JS 字符串放入 style 标签，插到 head 中
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};


