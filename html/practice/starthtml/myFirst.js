//***** Jsファイルの拡張子は.js。また、HTMLに組み込む場合、同じフォルダに保存する。
document.write('1足す2は');
document.write(1+2);
document.write('です');
// エラーの確認方法、chromeのデベロッパツールを利用。エラーのファイル名、行数を教えてくれる。エラー箇所をクリックすると、さらに詳細が出てくる。
console.log('計算結果を表示しました');
// console.logは、Webページに直接表示するものでなく、ログを残しておく記述

//***** Jsでの計算
// 数値：2 指数：1*5, XXe+YY(XX*10のYY乗のこと)など
// 文字列：'' で囲む。文法で使う記号の前は、\を記述すること(エスケープシーケンスという)
// 真偽値：true, falseを表す。Yes,Noやオン,オフのようなもの
// 四則演算はSwiftと一緒
// 浮動小数点：Jsでは浮動小数点のみを扱う。本来、割り切れない少数を途中で切るので浮動という。計算で誤差が出る事もある。

//***** プロジェクトを作ってみよう
// プロジェクトファイルは/Usere/ユーザー名 に作るのがおすすめ。今回はiCloudに作成する。
// workspaceフォルダ追加 > js-grammarフォルダ追加