//***** JavaScript のオブジェクト
/*
・オブジェクトとは、Jsにおける値の一つです
・オブジェクトは、プロパティという、名前と値のセットを複数持つ事ができる
*/
// オブジェクトの宣言は、{}で括り、その中にプロパティ名：値の形式で宣言する
// 複数ある場合は、　,   で区切る
// 下記は、１５歳の太郎という生徒を表現したオブジェクト
var student = {
    name: '太郎',
    age: 15
};
// あらかじめ変数がある場合、省略して記述できる
var age = 13;
var student = {
    name: '次郎',
    age
};
// 呼び出し方
console.log(student.name);
console.group(student.age);
// プロパティには、任意の値を代入することができる
student.age = 16;
console.log(student.age);

// プロパティに関数を設定することもできる
var counter = {
    number: 0,
    print: function () {
        counter.number++; // + 1 の意味
        console.log(counter.number);
    }
};
// 呼び出し方
counter.print(); // オブジェクト内の関数をprintに代入して呼び出す。呼び出す際、()を付ける。
counter.print();
counter.print();
console.log(counter.number);


// 練習
/* 
時間当てGameの要件を考える
要件とは、要求を実現するためにプログラムがどんな機能を持つべきかの詳細

要件
➊「１０秒だと思ったら何かキーを押してください」というダイアログを表示
➋ダイアログでOKを押すと、時間あてゲームがStartする
➌何かキーを押すと、時間あてゲームが停止する
➍９．５秒から１０．５秒の間なら「すごい」、そうでないなら「残念」と表示する
*/
// ➊
/*
if (confirm('OKを押して１０秒だと思ったら何かキーを押して下さい')) {
    // TODO Start処理
    console.log('Startしました');
}
*/

// TODO~処理は、後で記述する箇所の目印
// alert()：引数で渡した文字列をダイアログを表示する関数、OKのみ選択可能
// confirm()：引数で渡した文字列をダイアログで表示し、OK、キャンセルが選択可能
// confirm()：OK押す、true/キャンセル押す、falseが返る

// ➋
/*
var startTime = null; // 現在はstartTimeの値は空。
function start() {
    startTime = Date.now(); // 関数内では、開始時刻を取得。（ミリ秒）
    console.log('Startしました'); // 処理が実行されるとconsoleに表示される。
}
// もし、ダイアログのOKを押したら
if (confirm('OKを押して１０秒だと思ったら何かキーを押して下さい')) {
    // 関数start()を実行する
    start(); // TODO Start処理の部分
}
*/


// ➌

/*
var startTime = null; 
function start() {
    startTime = Date.now(); 
    document.body.onkeypress = stop; // HTML上で何かキーが押されたらstop関数を呼び出す。
    console.log('Startしました');
}
function stop() {
    console.log('stopしました');
}
if (confirm('OKを押して１０秒だと思ったら何かキーを押して下さい')) {
    start(); 
}
*/

// ➍
/*
var startTime = null; // 開始時間
var displayArea = document.getElementById('display-area'); // 表示エリア
function start() {
    startTime = Date.now();
    document.body.onkeypress = stop;
}
function stop() {
    var currentTime = Date.now();
    var seconds = (currentTime - startTime) / 1000;
    if (9.5 <= seconds && seconds <= 10.5) {
        displayArea.innerText = seconds + '秒でした。すごい！';
    } else {
        displayArea.innerText = seconds + '秒でした。残念・・・';
    }
}
if (confirm('OKを押して１０秒だと思ったら何かキーを押して下さい')) {
    start();
}
*/

// 上記をオブジェクトとして表現するには？？？
// gameというオブジェクトにまとめてみる

/*
var game = {
    startTime: null,
    displayArea: document.getElementById('display-area')
};
function start() {
    game.startTime = Date.now();
    document.body.onkeypress = stop;
}
function stop() {
    var currentTime = Date.now();
    var seconds = (currentTime - game.startTime) / 1000;
    if (9.5 <= seconds && seconds <= 10.5) {
        game.displayArea.innerText = seconds + '秒でした。すごい！';
    } else {
        game.displayArea.innerText = seconds + '秒でした。残念・・・';
    }
}
if (confirm('OKを押して１０秒だと思ったら何かキーを押して下さい')) {
    start();
}
*/


// 練習　関数も全てオブジェクトにまとめる
var game = {
    startTime: null,
    displayArea: document.getElementById('display-area'),
    start: function () {
        game.startTime = Date.now();
        document.body.onkeypress = game.stop;
    },
    stop: function () {
        var currentTime = Date.now();
        var seconds = (currentTime - game.startTime) / 1000;
        if (9.5 <= seconds && seconds <= 10.5) {
            game.displayArea.innerText = seconds + '秒でした！すごい！'
        } else {
            game.displayArea.innerText = seconds + '秒でした。残念・・・'
        }
    }
};

if (confirm('OKを押して１０秒だと思ったら何かキーを押して下さい')) {
    game.start();
}


// 自由にゲームを作ってみる
// 要件
//　❶
//　❷
//　❸
//　❹