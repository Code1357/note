/**
 * thisとは、Jsに元からある特別な変数
 * プログラム内のどこでもいつでも単体で利用できる特別な存在
 * 関数の外でも中でもthisに格納されている情報は全て同じ
 */

 console.log( this ); // 出力すると 結果：window{} となる
// windowオブジェクトは、全ての階層の最上位にいるオブジェクトであり、通常略す事ができる
    
 
 this.sample = 'こんにちわ';
 console.log(window.sample); // 結果：こんにちわ となる
// thisへ文字列を追加するという事は、windowsオブジェクトに追加するということ

// 関数で呼び出す
function s() {
    console.log(this);
}
s(); // 結果：window{}

// オブジェクトから呼び出す
const myObj = {
    name: this,
}
console.log(myObj.name); // 結果：window{}

// メソッドを作成してthisを記述,結果がwindow{}でなくなる
const myObj2 = {
    name: '太郎',
    myFunc: function() {
        console.log(this);
    }
}
myObj2.myFunc(); // 結果：{name: "太郎", myFunc: ƒ}　ƒは、functionという事

// コンストラクタで呼び出す
function Human(name, age) {
    this.name = name;
    this.age = age;
}
var taro = new Human('太郎', 30);
console.log(taro); // 結果：Human {name: "太郎", age: 30}

// apply/callで呼び出す,thisの中身を任意のオブジェクトに変更できるメソッド
function show() {
    console.log(this);
}
show(); // 結果：window{}

const ss = {
    name: 'sugizo',
    age: 50
}
function show2() {
    console.log(this);
}
show2.apply(ss); // 結果：{name: "sugizo", age: 50}
show2.call(ss); // 結果：{name: "sugizo", age: 50}

// 結局なに？？？？