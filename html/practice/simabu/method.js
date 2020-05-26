/**
 * 関数は使い回す事ができる
 * ①引数を入れる ②returnで出す　returnは1箇所にするのがベスト
 * 自動販売機で例えるとわかりやすい ①お金を入れる（引数） ②ジュースが出る（return）
 * 
 * 関数＝メソッドで理解してOK
 * 
 * 短縮記号というものがある
 * functionは、関数の中で短縮記号として取り扱う方が良い
 * 
 * returnのある場合、ない場合
 * 
 * 
 * 
 * 
 */

 /*
 function cut(仮引数1,仮引数2) {
        // 色々処理
    return 関数の返り値;
 }
 cut();
 */

function cut(food) {
    // 色々処理
    const cutFood = food + "ジュース"
    return cutFood; 
    // cutFoodに一度入る,で、const cutFoodはローカル関数で、cut()に戻され、 >>
    // 使えるようにするために下記、const cutCarrotへ値が代入される
}

const cutCarrot = cut("carrot"); // 人参  ,引数を渡す関数処理を変数に入れてあげる事で、より使いやすくする
const cutPotato = cut("potato"); // じゃがいも


function throwAway(food) {
    // 捨てる処理
    delete food;
}



// returnがある例
function isTweetable(text) {
    return text.length <= 140; // 計算式があって、結果を返す, あとは、何に代入や出力するかを決める
}

console.log(isTweetable("foo")); // true


// returnがない例
function alertTweetabele(text) {
    if (isTweetable(text)) { // 先に関数を作成していたら、使い回す事ができる
        alert("you can tweet!");
    }
}
alertTweetabele("foo"); // イメージ即座に実行し表示させる？