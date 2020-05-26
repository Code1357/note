// 再帰：関数の中で自分自身を呼びだす事を再帰という
// 再帰を使用できる条件：①停止条件を設定すること　②繰り返す度に状態が変化すること

function decrement(n) { // 引数3を渡す
    console.log(n); // 3を表示
    if (n === 0) {
        return; // もし0に等しければ終了（等しくならなければ無限ループに陥るので注意が必要）
    }
    decrement(n - 1); // 関数の中で自分自身の関数を呼び出す記述 > ここで再度関数を実行となるので、3-1をした結果の2を関数の引数に渡される　
}
decrement(3);　//　最初の関数の呼び出し


//　無名関数（匿名関数）：関数名なしに関数を定義できるもの
    // ①通常の関数
    function n(a, b) { 
        var result = a + b;
        return result; // 戻り値をresultに代入
    }
    n(1, 2); // n()関数に引数、1, 2 を渡す / 結果：3

    // ②無名関数:変数に関数の定義そのものを代入できるようになる
    var m = function (a, b) {
        var result = a + b;
        return result;
    }
    m(2, 3); // m()関数に引数、2, 3 を渡す / 結果：5
    　
//　即時関数：定義すると即時に実行される（無名関数で、関数を呼び出しながら、関数を設定する感じ）一度しか使わない関数は、即時関数で良いかも。
var s = (function (a, b) { // 無名関数のように変数を宣言。function の頭に（ をつけて、最後に ) で閉じる。 イメージ s(function)関数の中に引数として関数そのものが入る感じ。
    var result = a + b;
    return result;
})(1, 2); // 最後に渡したい引数を記述（関数を即時実行したい時、わざわざ関数を呼び出す必要がない）
console.log(s);


// 無名関数をアロー関数で記述
    // 無名関数
    var arrow = function(message) {
        console.log(message);
    }
    // アロー関数
    var arrow = message => { // 仮引数が単体の場合、()を省略できる
        console.log(message);
    }


// オブジェクト:通常
var money =  {
    wallet : "電子マネー", // ここで ,  を必ず入れないと思うように動作しないよ
    bill : 5000
}


// オブジェクト:オブジェクト内に関数設定
var pocket = {
    biscuits : 1,
    tap : function() {
        pocket.biscuits = pocket.biscuits * 2; // オブジェクトのbiscuitsを呼び出して計算し、オブジェクトのbiscuitsに代入
    }
};
pocket.tap();　//　オブジェクトのtap()関数を呼び出し
pocket.tap();
pocket.tap();
console.log(pocket.biscuits);


// オブジェクト内の関数の中での関数の呼び出し
var counter = { // オブジェクトcounter
    count: 0,
    countUp: function() {
        counter.count = counter.count + 3; // 最初に実行される関数　0 + 3 で　count = 3
    },
    printNextCount: function() {　//　次に実行される関数
        counter.countUp(); // ここでオブジェクト内の先にある関数が呼び出される 3 + 3 で count = 6
        console.log(counter.count);
    }
};
counter.countUp(); // 最初に実行される関数
counter.printNextCount(); // 次に実行される関数　/　結果：6が出力される