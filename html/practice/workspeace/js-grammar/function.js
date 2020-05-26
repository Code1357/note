// Jsの関数
// 記述：function 関数名() { 処理 }

// 組み込み関数：ブラウザで最初に使えるようにする関数
// alert(),log(),write()など

// 関数を作ってみる：以下、現在の日時を出力する処理をまとめる
function logDate() {
    console.log(new Date());　// new Date()は、現在の時間を取得できる関数
}
// 関数呼び出し
logDate();
logDate();
// 参考URL：https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date


// 関数に値を渡して、処理をして、その結果をもらう事もできる
function square(n) {
    return n * n; // 戻り値
}
var result = square(5); // 戻り値をresultに代入する 

square(square(2)); // 関数の中に関数を入れる事もできる、例は2の4乗

document.write(square(4)); // HTMLに表示
console.log(square(3)); // console.logに表示
console.log(square(12));

// 練習 下記は1970以前に生まれた人の計算としては、-秒になってしまう。
var myBirthTime = new Date(1980, 11, 11, 12, 30); // new Date(年,　月,　日,　分,　秒)で、月は、12月生まれなら11と入力する必要あり
function updateParagraph() {
    var now = new Date(); // nowに代入しても日付のままでは計算できない
    var seconds = (now.getTime() - myBirthTime.getTime()) / 1000;　//　nowに対して、getTime()関数を使う事で数値化して計算できるようにする(ミリ秒が計算される。/ 秒にする時は1000で割る。)

    document.getElementById('birth-time').innerText = '生まれてから' + seconds + '秒経過。';
}
setInterval(updateParagraph, 50); // updateParagraph:関数を○○ミリ秒繰り返し実行する

/* 
下記二つは、一緒の意味
var now = new Date();
now.getTime()

now = new Date().getTime();
*/

document.getElementById('birth-time2').innerText = '表示させたい文章';
// getElementById:HTMLで指定したidにマッチする名前を記述する関数
//　innerText:HTMLのタグで囲んだ中を表示するために必要

/*
setInterval(function() {
    document.write(new Date() + '<br>')
}, 500);　//　0.5秒 = 500ミリ秒に一回実行
// 1秒 = 1000ミリ秒
*/

/* 
関数の基本は、関数名()
が、関数を変数に入れて呼び出したり、
が、関数を引数として使う事もできる。
*/


//　練習
var radius = 2;
function circleArea(radius) {
    return radius * radius * 3.14;
}
document.getElementById('area').innerText = '半径' + radius + 'cmの円の面積は' + circleArea(radius);

// 練習2
function areaCircle(radius2) {
    var area = radius2 * radius2 * 3.14; // 戻り値に変数宣言しておく方が扱いやすくなる
    return area;
}
// 以下、circleArea()を呼び出し、HTMLに書き出す
document.getElementById('area2').innerText = '半径15cmの円の面積は' + circleArea(15);　// 型にこだわらなくて良い
document.getElementById('area3').innerText = '半径5cmの円の面積は' + circleArea(5);
document.getElementById('area4').innerText = '半径10cmの円の面積は' + circleArea(10);