//***** Jsで理論を扱う--if文 
// 記述：if( 条件 ) { 処理 }
var age = 16;
var result = null // null、空の値を代入している
if (age >= 20) {
    result = '成年';
} else if (age <= 20) {
    result = '未成年';
} else {
    result = '不明';
}
document.write(result); // 結果：未成年

// 比較演算子はSwiftと考え方一緒
// 記述の違いJSでは、等しい===　否定!== となる
// 論理の種類：否定、倫理和、倫理積、排他的倫理和
// 論理演算子：否定 !、倫理和 ||、倫理積 &&(Swiftと一緒)
false || false && !true;　// 結果：false
false || !(false && true); // 結果：true

var age = 65;
var isMember = true;
var result = null;
if (age >= 60 && isMember) { // ６０歳以上でtrueの場合
    result = 'シニア会員割引の対象です'
} else {
    result = 'シニア会員割引の対象外です'
}
document.write(result);

// 上記変数参照：真偽値の比較演算子
// isMember === true は、isMember と略せる(trueとtrueに等しい)
// isMember === false は、!isMember と略せる(trueとfalseは等しくない)

// 練習
var age = 16;
var isMember = true;
var result = null;

if (age <= 15) {
    result = '１５歳以下は、８００円です';
} else if (isMember) { // isMember === true の略
    result = 'ポイント会員は、１０００円です';
} else {
    result = '通常は、１８００円です';
}
document.write(result);

// 練習
var score = 10;
var result = null;

if (score === 100) {
    result = '最高！合格じゃん！';
} else if (score <= 30) {
    result = '最悪・・・追試だわ';
} else {
    result = 'まぁまぁだな。次がんばろう！';
}
document.write(result);