/***** 文字を回転させる
/*
var header = document.getElementById('header');　//　HTMLのheader idの紐付け
header.style.transform = 'rotateX(60deg)'; // 見出しのh1をx軸で60度だけ回転させるように変形するコード。degは度の意味。
// header.styleオブジェクト内のプロパティへ値を代入することで、その要素のCSSwo直接変更できる
*/

// 練習 アニメーション：20秒に一度、表示を更新させる
/*
var header = document.getElementById('header');

var degree = 0;
function rotateHeader() {
    degree = degree + 6;
    header.style.transform = 'rotateX(' + degree + 'deg)';
    // rotteX(という文字列
    // 変数degree の数値
    //　deg)という文字列
}
setInterval(rotateHeader, 20); // setInterval:一定時間、特定の処理を繰り返す
　　　　　　　　　　　　　　　　　　 // 20ミリ秒ごとに、関数rotateHeaderを繰り返し処理する
*/

// 上記の続き。回転して裏になるとclassを変更するコード
var header = document.getElementById('header'); // (`header`)バッククォーテションでも良い。
var deg = 0;
function rotateHeader() {
    deg += 6; // 20ミリ秒ごとに6度ずつ回転を増やす/deg = (deg)
    deg = deg % 360; // 360度になったらゼロに戻します。degが360までいくと余り0に戻る。色を付けたいのは360度回っている時だけ。その中でも下記の間だけ色を付けたい。
    if ((0 <= deg && deg < 90) || (270 <= deg && deg < 360)) { // 角度が0度以上~90度より小さい、または、270度以上かつ360度より小さい。
        // (0 <= deg）と（deg < 90)か(270 <= deg) と (deg < 360)
        header.className = 'face'; // `face`バッククォーテションでも良い。CSSにあるクラスの割当。
    } else {
        header.className = 'back' // `back`バッククォーテションでも良い。CSSにあるクラスの割当。
    }
    header.style.transform = `rotateX(${deg}deg)`;　
    // X軸をrotate(要素を回転させる）
    // deg:度
    // 上記headerは、HTMLのidを取得。styleは、CSSでなくてJsでスタイルを変更しますよ。って意味。
    // transformは、変形させるの意味。
    // 'rotateX(' + degree + 'deg)';　と　`rotateX(${deg}deg)`; でも良い。（シングルクォーテーションとバッククォーテションと括りの違い）　

}
setInterval(rotateHeader, 20);


// 上記のようにHTMLの要素のクラスをJsで動的に表示を切り替える事ができる