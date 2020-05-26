/**
 * JSONは、テキストベースのフォーマット
 * JSONの文字列をJavaScriptのオブジェクトに展開したい
 * 
 */
// JSONの文字列
const jsonString = `{ "student": 40, "grade": 4, "name": "C組" }`;

// 文字列をJavaScriptのオブジェクトに変換
const date = JSON.parse(jsonString);

console.log(date);
console.log(date.student);
console.log(date.grade);
console.log(date.name);

/**
 * JavaScriptのオブジェクトをJSONに変換したい
 */

 // JavaScriptのオブジェクト
 const date2 = {a: 1000, b: 'こんにちは、世界'};

 // JavaScriptのオブジェクトをJSON文に変換
 const str = JSON.stringify(date2);

 console.log(str);

 /**
  * JSON変換時にインデントをつける
  */

const date3 = {a: 1000, b: 'こんにちは、世界'};
const str2 = JSON.stringify(date3, null, ' ');

console.log(str2);

/**
 * JSONの変換ルールをカスタマイズする
 */

 //　独自のルールを設定したい時は、replacer(変数名は必ずreplacerにする) を使い、第2引数にあてる
// (kye, value) kyeはなんでも良い、値を受け取るためにvalueは必要（オブジェクトの引数[添字,値]を2つGETしている）

 const replacer = (kye, value) => {
   // 数値だったら無視する
   if(typeof value === 'number') {
       return undefined;
     }
     return value;
 }

 const obj = {
   pref: 'tokyo',
   orange: 100,
   flag: true,
   apple: 100
 };

 const str3 = JSON.stringify(obj, replacer, ' ');
 console.log(str3);

 //　typeof は、値の型を返す
 console.log(typeof 11);
 console.log(typeof '文字列');
 console.log(typeof null);
 console.log(typeof undefined);
 console.log(typeof false);
 console.log(typeof true);
 console.log(typeof { name: 'ちょこ'});
 console.log(typeof [1, 'choko', 55]);
 console.log(typeof function() {});

 /**
  * fetch()メソッドでテキストを読み込む
  */

  // fetch()メソッドを利用することで、非同期のネットワーク通信を簡単にわかりやすく記述できるようになる
  // fetch()を使う事で外部ファイルを簡単に受診できる。また、非同期処理として実装する。

  // Promiseの.thenを使う(非同期処理の記述)
  fetch('json.text'/* ここにはURLやディレクトリパスが入る */)
  // 結果を取得するために.thenを使う
  .then((data4/* 引数[fetchで実行したデータを受け取る] */) => data4/* 引数 */.text /* ここには解析したい拡張子が入る */())
  .then((text/* 引数2 */) => {
    console.log(text)/* 引数2 */;
  });

  // await/asyncを使った記述(非同期処理の記述だが、同期処理のように記述できる)
  async function load() {
    const data5 = await fetch('json2.text');
    const text = await data5.text();
    console.log(text);
  }
  load();

  // await:Promiseを返す
  // async:Promise処理のの前に記述すると一時停止してくれる
  // 参考URL：https://www.sejuku.net/blog/69618
  // Promise:Promise とは状態を表すオブジェクト
  // 参考URL：https://rightcode.co.jp/blog/information-technology/javascript-promise#Promise

// JSONの読み込み(Promise)
fetch('json.json')
.then((data6) => data6.json()) // Jsonメソッドを実行してデータを解析している
.then((obj2) => {
  console.log(obj2);
});

// JSONの読み込み(anync,await)
async function load2() {
  const data7 = await fetch('json.json');
  const obj3 = await data7.json(); // Jsonメソッドを実行してデータを解析している
  console.log(obj3);
}
load2();

// fetchでデータをWebサーバに送信する方法（application/JSON方式,POSTで送信）/受信する方法は相手側で変化する
const obj4 = {hello: 'world'};

const data8 = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(obj4)
};

fetch('./new')
.then((res) => res.text())
.then(console.log);

// POST:安全にデータを送信する手段

// フォーム方式で送る場合(multipart/from-data方式,POSTで送信)
const body2 =new FormData();
body2.set('hello', 'world');

const data9 = {
  method: 'POST',
  body: body2
};

fetch('./new', data9)
.then((res) => res.text())
.then(console.log);

// 
const error =new Error('エラー発生');
console.log(error.message);
