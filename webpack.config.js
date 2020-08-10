// Node.jsのpathモジュールを使う
const path = require('path');

// 絶対パスの生成
const outputPath = path.resolve(__dirname, 'dist');
console.log({ outputPath });

module.exports = {
  // webpackのエントリーポイント
  // モジュールバンドルの対象を設定する
  entry: './src/index.js',
  // 成果物の出力先
  output: {
    filename: 'main.js',
    // pathは絶対パスで指定する
    path: outputPath,
  },
  module: {
    rules: [
      {
        // cssファイルにcss-loaderを使うという設定
        test: /\.css$/,
        // 順番に注意
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        // sass-loaderでsassファイルをコンパイルする→css-loaderでcssをコンパイル→style-loaderでstyleタグを付与
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loader: 'url-loader',
        options: {
          // 指定のサイズを超える場合
          limit: 2048,
          // 指定フォルダに分離させる
          name: './images/[name].[ext]',
        },
      },
    ],
  },
  devServer: {
    // デフォルトで開くファイルパス
    contentBase: outputPath,
  },
};
