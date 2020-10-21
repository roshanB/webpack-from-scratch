const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        //Tried_files_to_match_against - when encounters above files use following loaders
        //loader is a helper that converts the code
        use: {
          loader: "babel-loader", //Tried_use_babel_loader_for_transpiling
        },
        exclude: /node_modules/,
      },
      {
        //Tried_css_loader_rule
        test: /\.css$/,
        use: ["style-loader", "css-loader"], //Tried_order_matters_here
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader", //Tried_use_html-loader
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
