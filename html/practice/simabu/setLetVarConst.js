// 処理するにあたり、使いやすくするためにデータを整理するための箱が変数や定数
/**
 * Q.変数とは？
 * A.データを保存しておくための箱
 * 何を変数に入れるかは、好みになってくる
 *  const 変数名 = 初期値；
 *  let 変数名 = 初期値;
 *  var 変数名 = 初期値;
 * 下記のように使うと、コンパクトに記述できる
 */

const foo = document.getElementById("foo");

const fooWidth = foo.offsetWidth;

const fooHeight = foo.offsetWidth;

const fooArea = fooWidth * fooHeight;

// 宣言する場合、下記の表記が可能
const fooA = 100,
const _fooB = 100,
const $fooC = 100,


/**
 * const 再代入できない,再定義できないが、、、、
 * 下記のようにObjectの中の数値は変更する事が可能
 * つまり、定数ではあるが、厳密にはconstは定数ではなく、変数としてみれる
*/
const objA = {
    fooD: 123
}
console.log(objA.fooD); // 結果：123

objA.fooD = 456;
console.log(objA.fooD);

/**
 * let 再代入できる、再定義できない
 */

 /**
  * var 再代入できる、再定義できる
  */

  // まとめ：const が基本。const でうまくいかない時に、let を使う。