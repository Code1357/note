// jQuery の補完は毎回vscodeのターミナルに「npm install @types/jquery」を記述してフォルダにインストールする必要あり

// jQueryの配列
let omikujiResult = [
    "大吉",
    "中吉",
    "小吉",
    "凶"
];

// 
$(function () {
    $("#omikujiBtn").click(function () {

        // 関数を実施する前に、最初に画像をリセット（セット？）してあげる
        $("#omikujiResult").html("<img id='omikujiImg' src='omikuji01_02.png'>");
            
        $("#omikujiBtn").prop("disabled", true); 
        // prop("disabld", true) ボタン要素を無効にする。これで、リセットするまで連打を防ぐことができる
        // disabld が無効かの意味

        // おみくじを振る
        $("#omikujiImg").addClass("buruburu"); // .addClass() 任意の要素にclassを追加する

        // ぶるぶるを止める
        setTimeout(function () { // setTimeou() 一定時間後に処理を行う
            $("#omikujiImg").removeClass("buruburu"); // .removeClass() 指定したclassを削除
        }, 1500); // 1500ミリ秒後に呼び出し

        // おみくじをひっくり返す
        setTimeout(function () {
            $("#omikujiImg").addClass("rotate");
        }, 3000);

        // 結果を返す
        setTimeout(function () {
            let result = omikujiResult[Math.floor(Math.random() * omikujiResult.length)];
            // Math.floor() 引数として与えた数以下の最大の整数を返す(小数点以下切り捨て)
            // Math.randam() ０以上１未満の疑似ランダムな浮動小数点による小数(乱数)　＊　配列の要素の個数
            $("#omikujiResult").html("<div class='omikujiResultInner'>" + result + "</div>");
            // 指定したidのHTMLを書き換える
        }, 5000);

        // リセットする
        setTimeout(function () {
            $("#omikujiResult").html("<img id='omikujiImg' src='omikuji01_02.png'>");
            $("#omikujiBtn").prop("disabled", false); // 無効を外す処理
        }, 8000);
    });
});



  // ん～連打止まらないけど・・・まぁ、練習だからいっか。