

/**
 * Jsでclass構文が追加されたのは、ES6から
 * コンストラクタ：インスタンス（実体）を作成する関数
 * メソッド：オブジェクトの中に定義される関数
 * class構文は他のclass構文に内容を引き継ぐ事ができる
 * classを用いる事で、メンテナンス性の高いコードを書く事ができる
 * classは設計図：実体のない状態
 * クラス名の頭は大文字にすること
 * class構文は二種類の記述方法がある
 */

 // 記述➊クラス宣言
/*
class クラス名 {
     // コントラストやメソッドを定義する
 }
*/
class Parson {
    constructor (name, age) { // constrauctor で定義する必要があり、インスタンス化の時に引数を渡せるようになる
        this.name = name;
        this.age = age;
    }
}
// インスタンスの生成（new が必要）
const a = new Parson('ちょこ', 39);
console.log(a);


// 記述➋class式,クラス名を省略することが可能,またクラスを再宣言（再定義）することも可能
/*
const 変数名 = class {
    // コンストラクタやメソッドを定義する
}
*/
const MyClass = class {
    constructor (bird, pig) {
        this.bird = bird;
        this.pig = pig;
    }
}
console.log(new MyClass('鳥さん', '豚さん')); // 呼び出す時は、new でインスタンスの生成が必要

// 
const MyclassA = class {
    constructor(hippo, horse) {
        this.hippo = hippo;
        this.horse = horse;
    }
}
const MyclassB = new MyclassA('かば', '馬');
console.log(MyclassB.hippo);


/**
 * JavaScript におけるメソッドとは？
 * 関数ではあるが、オブジェクトの中に定義されるものをメソッドと区別している
 * クラスObjectのメソッドは、function を略す必要あり
 * 通常のObjectのメソッドは、function を略すこともできるし、記述することもできる
 * 参考URL：https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions
 */
// Object の構造
/*
const obj = {
    // プロパティ:値,
    // プロパティ:値,
    // プロパティ:関数　← これがメソッド
}
*/
//
var obj = class {
    showText(num) {
        
        var result = num * num;
        
        //計算した結果を戻り値として返す
        return result;
        
    }
}
const objC = new obj;
console.log(objC.showText(10));

//
