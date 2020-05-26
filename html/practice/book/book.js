// consoleに指定文字を入力して書き出す
/*
let moji = prompt('入力しろ');
console.log(moji);
*/

// 文字列を数値に変換
console.log(parseInt('120'));

// 表示されている数値のみを抜き出す
console.log(parseFloat('600えんだよ'));

/**
 * 戻り値は、メソッドが返す値
 * 戻り値と結果はイコールではない
 */

 /**
  * console は、オブジェクト
  * つまり、機能（メソッド）と変数（プロパティ）の集合体
  * log は、メソッドになる
  * consoleオブジェクト の中のlog メソッドを呼び出している
  *     
  *     console オブジェクトのイメージ
  *         let console = {
  *             log() {
  *             },
  *             ・・・・・
  *         }
  */

  /**
   * TypeError : 型エラー
   * Reference : 参照エラー
   * SyntaxError : 文法エラー
   * undefinde : 値がないという意味
   */


   // 数値へ変換可能な値ならtrue を返す, 数値へ変換不可な値ならfalse を返す関数
   let stringA = isNaN('あ'); // 変換不可
   console.log(stringA);
   let intA = isNaN('1'); // 変換可能
   console.log(intA);
   let intB = !isNaN('2'); // 変換可能だけど!で否定している
   console.log(intB);

   
   /**
    * for-of
    * 配列から1要素ずつ順番に取り出して繰り返しできる文
    */
    let wday = ['月', '火', '水', '木', '金', '土', '日'];
    for(let day of wday) {　//　変数day に配列を順番（for）に代入, 代入し終えるまで繰り返す 
        console.log(day + '曜日');
    }

    // 総当たりを作成
    let team = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    let opps = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    for(let t1 of team) { // team配列を呼び出すごとに下記for文を処理
        opps.shift(); // opps配列の先頭の要素を削除
        for(let t2 of opps) {
            if(t1 !== t2){
                console.log(t1 + ' vs ' + t2); // 条件に当て嵌めながら出力
            }
        }
    }

// 練習
let wday2 = ['月', '火', '水', '木', '金', '土', '日'];
for(let cnt = 4; cnt >= 0; cnt--) {
        console.log(wday2[cnt]);
}


/**
 * 関数は、変数に代入できる
 * 変数に代入した場合でも、変数(); で呼び出せる
 * 関数は、変えたいところだけ引数で指定する
 * ES6では禁止ではないが、アロー関数が主流になる
 * 関数の括りの最後は ; で閉める
 * 関数内の変数はローカル変数という（関数内でしか使えない）
 * 関数外での値は、引数や戻り値を使う
 * 自作の関数で戻り値を返す場合にreturn を使う
 */

 /**
  * テンプレート文字列 ` ` バッククォートで括る
  * 改行、スペースもそのまま反映される
  * ${変数名}は、変数を差し込む事ができる
  */

  let createMail = (recv, bill) => {
    let msg =
    `${recv}様  
    PT企画のちょこです。
    今月の請求額は${bill}円です。`;
        console.log(msg);
  };
  // createMail('ちょこぶくろ' ,1680); // アロー関数で作成した関数、変数名(引数)を渡す


  let addCharge = (bill) => {
      return bill * 1.07;
  };
  // console.log(addCharge(40000) + '円'); // 引数を渡した後、関数が実行され、addCharegeに戻される, 渡された引数は消化されるとイメージする


  // Object でまとめる
  let data = [ // 配列でまとめる
      {name: '山本', bill: 40000, crg: true },
      {name: '吉田', bill: 25000, crg: false }
  ]; // Object の最後も ; で閉める
  // console.log(data[1]['name']);
  // console.log(data[1]['bill']);

  for(let rec of data) {
      let bill = rec['bill']
      if(rec['crg']) {
          bill = addCharge(bill);
      }
      createMail(rec['name'],bill);
  }

  // 練習
  let addCharge2 = (bill) => {
        if(bill < 0) {
        return 0; // 先にreturn が実行されれば関数内の処理は終了の合図
        }
        return bill * 1.07;
  };
  console.log(addCharge2(-1000));

/**
 * DOM操作
 */
let tarea = document.querySelector('textarea');
let findipt = document.querySelector('#findtxt');
let repipt = document.getElementById('reptxt');

let btn = document.querySelector('button');
let elme = document.querySelector('p');

btn.addEventListener('click', () => {
    let findtxt = findipt.value;
    let reptxt = repipt.value;
    let tagtxt = tarea.value;
    findtxt = new RegExp(findtxt, 'g');
    tagtxt = tagtxt.replace(findtxt, reptxt);
    elme.innerText = tagtxt;
});
