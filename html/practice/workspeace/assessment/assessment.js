
/* 
要件：
1-1.名前を入力すると診断できる
 -2.同じ名前なら、必ず同じ診断結果が出る
 -3.診断後に、自分の名前入りの診断結果が表示される
2-1.診断結果をツイートボタンでツイートできる

UIの機能が含まれていない状態をモックアップという
紙で作ったものをペーパーモックアップという
慣れるまで先に紙に書いておくとイメージしやすい
機能が含まれていなくても、利用者が触れる事ができる部分をUIという

*/

/*
◆診断機能の開発と組み込み
そもそも診断機能とは？
診断機能の要件は、「いいところを診断できる」の項目となる。

2-1.名前を入力すると診断結果が出力される関数
1-1.診断結果のパターンのデータが取得できる
-2.入力が同じ名前なら、同じ診断結果を出力する処理
-3.診断結果の文章のうち名前の部分を、入力された名前に置き換える処理


*/
'use strict';
/* 
宣言後の記述ミスをエラーとして表示してくれる機能を呼び出すための記述。
通常エラーにならなかったバグになりそうなコードに対してエラーを表示する方法。
関数や全体の冒頭に記述する。
エラーは、chromeの検証画面で確認する事ができる。
記述したコードを厳格にチェックされるということ。
*/

// 下記はHTMLのそれぞれのidを使って要素を取得している
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');

/**
 * 指定した要素の子どもを全て削除する（以下関数をonclickの診断結果表示エリアに記述する）
 * @param {HTMLElement} element 
 */
function removeAllChildren(element) { // 引数elementは、変数宣言のない変数のようなもの。関数を作成するための仮の引数みたいなもので、elementでなくて例えばxやyとかでも問題ない。
    while (element.firstChild) { // 子どもの要素があるかぎり削除
        element.removeChild(element.firstChild);
    }
  }
/*　①
assessmentButton.onclick = function() { // onclinkは、Jsの中でイベントハンドラという/無名関数という名前を持たない関数の記述法
    console.log('ボタンが押されました')
    // TODO 診断結果表示エリアの作成
    // TODO ツイートエリアの作成
}
*/
// 上記①をES6でもっと簡単に記述する
assessmentButton.onclick = () => {　// functionを消して => を記述。アロー関数という。①と同じ意味。
    const userName = userNameInput.value; // テキストに入力された値を代入(valueは、userNameInputの値を参照するという意味）
    if (userName.length === 0) { // 名前の配列要素数（文字列の長さ）が0だったら。
        // 名前が空白の時は処理を終了する
        return; // returnは戻り値なしにそこで終了するという意味（ガード句という）ifとelseでもいいけど、読みやすくするためにreturnを使う
    }
     //　診断結果表示エリアの作成
   
   /*
    while (resultDivided.firstChild) { // text-areaに入っている子要素（例：岡田康弘）がある場合、
        resultDivided.removeChild(resultDivided.firstChild); // text- area内の最初の子要素を削除する
    }
   */
    removeAllChildren(resultDivided); // elementの仮引数にresultDividedを入れて関数を実行

    const header = document.createElement('h3'); // createElement('h3')は、h3の要素を作成する
    header.innerText = '診断結果'; // h3の内側のテキストは、「診断結果」　/　document.write('<h3>診断結果</h3>');は後から手間になる。
    resultDivided.appendChild(header); // appendChild()関数:子を追加するという意味。HTMLの<div id="result-area">(親）のエリアにh3（子）を追加する

    const paragraph = document.createElement('p');
    const re = assessment(userName); // 関数を実行して、その結果をreに代入
    paragraph.innerText = re;
    resultDivided.appendChild(paragraph);

    // TODO ツイートエリアの作成
    //　②
    removeAllChildren(tweetDivided);
    const anchor = document.createElement('a'); // aタグ作成

/*
　ハッシュタグの設定
　URIの"あなたのいいところ""は本来、日本語は使えない。なので、下記URIのエンコード作業が必要
*/
    const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=' + encodeURIComponent('あなたのいいところ') + '&ref_src=twsrc%5Etfw';　// URL（ネットでのリンク）ではなくて、URI（ネット内にある情報やサービスを識別するためのデータ形式）という

    anchor.setAttribute('href', hrefValue); // setAttribute()関数：属性を設定するという関数（idやclassも属性）属性：HTMLの要素に何かしらの設定をつけるようなもの。<要素名 属性 = ”属性値”>　'href'が属性
    anchor.className = 'twitter-hashtag-button';　// class属性の設定
    anchor.setAttribute('data-text', re); // data-text属性の設定 診断結果の文章を、resultに変更する
    anchor.innerText = 'Tweet #あなたのいいところ'; // タグ内のtextの設定

/*
    　上記、②からここまでの記述は、下記をJsで記述しただけ
        <div id="tweet-area">
        <a href="https://twitter.com/intent/tweet?button_hashtag=あなたのいいところ&ref_src=twsrc%5Etfw"
        class="twitter-hashtag-button" data-text="診断結果の文章">Tweet #あなたのいいところ</a>
        </div>
*/
    tweetDivided.appendChild(anchor);　// tweet-areaに、anchorを追加する

    // scriptの読み込み作成③
    const script = document.createElement('script'); // scriptタグ作成
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js'); // 属性とURL追加
    tweetDivided.appendChild(script); // tweet-areaに、scriptを追加
/*
上記、③からここまでの記述は下記をJsで記述しただけ
<script async src="https://platform.twitter.com/widgets.js"></script>
*/

/*
    const tweet = document.createElement('p');
    tweet.innerText = 'テスト';
    tweetDivided.appendChild(tweet);
*/

};

// Enterキーを押すと診断できる
userNameInput.onkeydown = (event) => { // eventは引数（無名関数の作成）引数が一つの場合、()は省略できる。
    if(event.key === 'Enter') { // 引数 Enter を渡して、等しい場合処理 keyは、プロパティ
        assessmentButton.onclick();
    }
};


let answers = [
    '{userName}さんのいいところは声です。{userName}さんの特徴的な声は皆を惹きつけ、心に残ります。',
    '{userName}さんのいいところはまなざしです。{userName}さんに見つめられた人は、気になって仕方がないでしょう。',
    '{userName}さんのいいところは情熱です。{userName}さんの情熱に周りの人は感化されます。',
    '{userName}さんのいいところは厳しさです。{userName}さんの厳しさがものごとをいつも成功に導きます。',
    '{userName}さんのいいところは知識です。博識な{userName}さんを多くの人が頼りにしています。',
    '{userName}さんのいいところはユニークさです。{userName}さんだけのその特徴が皆を楽しくさせます。',
    '{userName}さんのいいところは用心深さです。{userName}さんの洞察に、多くの人が助けられます。',
    '{userName}さんのいいところは見た目です。内側から溢れ出る{userName}さんの良さに皆が気を惹かれます。',
    '{userName}さんのいいところは決断力です。{userName}さんがする決断にいつも助けられる人がいます。',
    '{userName}さんのいいところは思いやりです。{userName}さんに気をかけてもらった多くの人が感謝しています。',
    '{userName}さんのいいところは感受性です。{userName}さんが感じたことに皆が共感し、わかりあうことができます。',
    '{userName}さんのいいところは節度です。強引すぎない{userName}さんの考えに皆が感謝しています。',
    '{userName}さんのいいところは好奇心です。新しいことに向かっていく{userName}さんの心構えが多くの人に魅力的に映ります。',
    '{userName}さんのいいところは気配りです。{userName}さんの配慮が多くの人を救っています。',
    '{userName}さんのいいところはその全てです。ありのままの{userName}さん自身がいいところなのです。',
    '{userName}さんのいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}さんが皆から評価されています。',
];

/*　
const:1度しか代入できない、{}で囲まれた中（ブロックスコープ）でのみ使える
let:Jsでは、{}で囲まれた中（ブロックスコープ）でのみ使える変数
var:自由に使える変数
constとletは{}の外であっても、同じ括りの中であれば使用する事ができる
{}の外でconst、letを設定した場合、どこでも使える
変数の有効な範囲をスコープという
constとletを使うのが、Jsでは推奨されている
*/

/*　関数の実装　*/

// 関数の説明を行う時は、『/**』と記述してenterを押すと下記のうよになる
// 下記の@param {string} userNameの{string}は型の設定。{*}の場合は、型の指定なし
//　『/** */』の範囲はあくまでコメント（JsDocと呼ばれる形式のコメントの書き方）
//　記述してもしなくても良いが、チーム開発では必須項目にする方が良い
// 参考URL：https://ja.wikipedia.org/wiki/JSDoc

/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @author: ちょこ
 * @param {string} userName ユーザーの名前
 * @return {string} 診断結果
 */
function assessment(userName) {
    // 全文字のコード番号を取得してそれを足し合わせる
    let sumOfCharCode = 0;
    for (let i = 0; i < userName.length; i++) { // length:配列の要素を数える
        sumOfCharCode = sumOfCharCode + userName.charCodeAt(i); // ユーザーネームを取得して、添字で2進数での値を取得する度に足して代入する
    };

    // 文字のコード番号の合計を解答の数で割って添字の数値を求める
    const index = sumOfCharCode % answers.length; // 2進数の全ての値が出たあとに、answersの要素数で割って余りを出す
    let result = answers[index];　//　と、該当する項目を添字で抜き出す

    //　resultの中の{userName}をuserNameに書き換えてください。のコード。 
    result = result.replace(/\{userName\}/g, userName);
    // replace() は、文字列の置き換え関数
    // /\{userName\}/g,　の部分が、正規表記(/userName/g, でも良い)
    // 上記は、{userName} を見つけたら、置き換えてください。全て置き換えてくださいね。のコード。
    // 正規表現参考URL：https://www.sejuku.net/blog/21107
    // 参考URL：https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Regular_Expressions

    return result;
}

/*
'A'.charCodeAt(0); // 'A'を2進数で表示する関数：charCodeAt(); (0) は引数で、必ず添字を記述する　'A' 結果：65
String.fromCharCode(65);　//　逆引きする方法結果：65を検索すると 結果：'A'
*/


// {userName}をユーザーの名前に置き換える方法
// 正規表現という機能を使う　
// 上記、const result = answers[index]; の箇所をいじる　＞　let result = answers[index]; に置き換える


// console.assert()関数でJsの記述したテストを行う（バグ探しの方法の一つ/テストの手法は様々ある）
// falseの場合、コンソールにメッセージを出力する
console.assert(
    assessment('太郎') ===
      '太郎さんのいいところは決断力です。太郎さんがする決断にいつも助けられる人がいます。',  // 関数assessment(userName)を実行して、期待する結果（true)となりエラーでなければOK
      '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'// 出力されるメッセージ
  );


  // テスト2.「入力が同じ名前なら、同じ診断結果を出力する」処理が正しいか確認する
  console.assert(
    assessment('太郎') === assessment('太郎'), // trueなら同じ診断結果を出力。結果、テストはOK。
    '入力が同じ名前なら同じ診断結果を出力する。処理が正しくありません'  // false。テスト失敗。どこかコードに間違った箇所がある事になる。
  )
