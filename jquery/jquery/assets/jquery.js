/**
 * -JQeryの記述は、JavaScriptのライブラリなので、.Jsファイルに記述する
 * で、HTMLへlinkさせる
 * Webから直接jQueryファイルを指定して読み込む方法もある
 * 下記、1行目が必須コード
 * 基本的にHTML要素（DOM要素）に対して、どんな処理をしたいか？がJavaScriptとの考え方の違い
 */

 /*-必須コード
 $(document).redy(function() {
  // 実行したい内容を記述
 });
*/

 // 上記の略記述（必須コードで、一般的な記述）
 $(function() {
  // 実行したい内容を記述
 });

 // h1タグを指定して、innerTextを書き換える
 $(function() {
   $("h1").text("ちょこさん、こんにちわ！")
 });

 /**
  * -CSSのセレクタ指定と同様に指定できる
  * $("h1") タグ指定
  * $("p") p指定
  * $("#id名") id指定
  * $(".class名") クラス指定
  * $("div,p,span") 複数指定
  */

  /**
   * -実行には大きく2種類ある
   * ・読み込み実行
   * ・イベント
   * ・イベント関数を実行する際、function()は必須
   */

   //　クリックした時のイベント（click）
   $(function() {
     $("#btn").click(function() {
       $("h2").text("変化したでしょ？");
     });
   });

   //　ボタンを押した時(mousedown)、離した時の動作(mouseup)
   $(function() {
    $("#btn_2").mousedown(function() {
      $("h3").text("マウスを押すと変化");
    });
    $("#btn_2").mouseup(function() {
      $("h4").text("離すと変化");
    });
   });

   // マウスをスクロールした時にスクロールした高さを表示する(scroll)


$(function() {
  let scr; // 変数を宣言 [any]なので、型を指定していない
  $(window).scroll(function() { // スクロールイベントの設定
    scr = $(this).scrollTop(); // $(this).scrollTop() スクロールの値を取得。
    // .scrollTop() スクロールの高さを数値で取得する。
    $("#scroll-position").text(scr); // idを取得して、スクロールする度に値を書き換える
  });
});
//　スクロールイベントを上手く使うとAppleと同じようなページが作れる


// ボタンをクリックすると文字の色が変化
$(function() {
  $("#btn_3").click(function() {
    $("#btn_3").css("color", "#ff0000"); // 指定した文字の色を変化
  });
});

//　クリックすると背景の色が変化
$(function() {
  $("#btn_3").click(function() {
    $("body").css("background", "#ffff00"); // 指定した文字の色を変化
  });
});
//　上記をまとめてあげることができる
$(function() {
  $("#btn_4").click(function() {
    $("body").css({
      "color": "blue",
      "background": "purple"
    });
  });
});

//　タグを指定して、テキストとStyleを変更してみ
$(function() {
  $("#btn_5").click(function() {
    $("h1")
      .text("今日はこれくらいで終わりかな")
      .css("color", "red");
  });
});
