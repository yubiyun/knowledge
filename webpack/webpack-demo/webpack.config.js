// const path = require("path");
module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
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
  // entry: "./src/index.js",
  // output: {
  //   path: path.resolve(__dirname, "dist"),
  //   filename: "bundle.js",
  // },
};
