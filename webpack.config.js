module.exports={
  devtool: 'eval-source-map',
  entry: __dirname + "/js/main.js",
  output:{
    path:__dirname + "/public",
    filename:"my.js"

  },
  module:{
     loaders:[
       {
         test: /\.css$/,
         loader: "style-loader!css-loader"
       }
     ]
  },
  devServer: {
  contentBase: "./public",
  historyApiFallback: true,//不跳转
  inline: true//实时刷新
}

}
