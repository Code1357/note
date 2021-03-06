/* 関数を使うコツ：あくまで  定義  してから呼び出す事を忘れずに 
   変数へ代入する際など、関数の呼び出し();を使うのは一度だけである事に注意*/


// 関数の定義
function 関数名(引数) {
  処理;
};

// 関数式の定義,関数名がなくても動くのが匿名関数,変数へ代入する事で関数を値として取り扱う
const 変数名 = function(引数) {
  処理;
};

// 関数式,アロー関数,匿名関数
const 変数名 = (引数) => {
  処理;
};

// 定義した関数を実行する,基本
関数名(引数);

// 関数を値として取り扱う,自作関数でも組み込み関数でも取り扱いは一緒
const 変数名 = 関数名;

//　関数を値として取り扱い、実行するまで
const 変数名 = 関数名;
変数名(引数);

// 実行後に代入して、値として取り扱う
const 変数名 = 関数名();
変数名;

// 関数式から関数を実行するまで
- Pattern1
const 変数名1 = (引数) => {
  処理;
}
変数名1(); 

- Pattern2
const 変数名1 = (引数) => {
  処理;
}
const 変数名2 = 変数名1(); 
変数名2; 
/* 変数名2に代入する時に変数名1();と実行しているので、最後は();なしで実行となる。
   変数代入した場合、どこかで関数を1度でも実行されているか否かで記述が変わる事に注意。 */

// 即時関数式,即時に実行される
- 即時関数式,通常
(function(引数) {
  処理;
})(引数);

- 即時関数式,アロー関数
((引数) => {
  処理;
})(引数);

- 即時関数式,変数に代入してからの呼び出し
const 変数名1 = ((引数1, 引数2) => {
  const 変数名2 = 引数1 + 引数2;
  return 変数名2
})(引数1,　引数2)
変数名1; 
/* 即時関数式で、既に実行しているので();は不要。
結果にアクセスしたい場合、グローバル変数とローカル変数の関係性から変数名1からアクセスする必要がある。 */

// 高階関数,関数の中で関数を実行する
- 分離して考える
 - 関数の定義1/"最初に実行したい関数"
 function 関数名1(引数) {
   処理;
 }
 - 関数の定義2/"後で実行したい関数"
 function 関数名a(引数) {
   処理;
 }
 
- 定義1と定義2をひっつけて実行する,定義2を引数として考える
関数名1(関数名a); 
/* 関数名1が高階層関数。関数名2は();不要。高階関数が実行されると、関数名2が実行される。関数名1は、ちゃんと();がついている */
関数名1(function() {処理});
関数名1(() => {処理});

// コールバック関数
上記,関数名aがコールバック関数
関数名a自身が実行するのではなく,他の誰かに実行してもうらうのがコールバック関数