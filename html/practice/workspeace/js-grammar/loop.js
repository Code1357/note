//***** Jsのループ
// 記述：for (初期化式; 条件式; 変化式) {　繰り返したい処理を記述　}
for (var i = 0; i < 100; i++) {
    // 繰り返したい処理
}

var i = 0; // 一番最初に実行する処理
i < 100; // 繰り返しをして良いかの真偽値を記述
i++ // ループの"繰り返したい処理"の1つに入る前に実行される処理
i = i + 1 // これを略すと、i++ となる


for (var i = 1; i <= 2; i++) {
    document.write(i + ' ');
}


// 練習
for (var i = 1; i < 100001; i++) {
    document.write(i + ' '); // iに' 'スペースを足してHTMLに表示される際、見やすくしておく
}


// 練習 Fizz Buzz FizzBuzz/自分で考えて記述した解答
for (var i = 1; i < 100001; i++) {
    if (i % 3 === 0) {
        document.write('Fizz ');
    }else if (i % 5 === 0) {
        document.write('Buzz ');
    }else if (i % 15 === 0) {
        document.write('FIizzBuzz ')
    }else {
        document.write(i + ' ');
    }
}
