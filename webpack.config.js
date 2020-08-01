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
};
