$(function() {
  $("#thumnail-list li").click(function() {
  　// 画像を切り替える
    let imageSrc = $(this).find("a").attr("href"); // find() 子要素の取得。　attr() 要素の属性を操作できる。(この場合、aの要素の属性が操作可能)

    $("#main-image").attr("src",imageSrc); 
    //.attr("src",imageSrc); src=それぞれの画像リンクを取得(a href)
    // afttr()は要素の追加が可能。似ているので注意。

    // selectedをリセットする
    /*$("#thmnail-list li").removeClass("selected");*/ // .removeClass() クラスの削除。

    // 指定しているサムネイルにselectedクラスをつける
    /*$(this).addClass("selected");*/ // addClass() 任意の要素にclassを追加

    // aタグのリンクを無効にする/ここでいちど中断する
    return false;
  });
});

/*
$(function() {
  $("#thumnail-list li").click(function() {
    // 画像を切り替える
    var imageSrc = $(this).find("a").attr("href");
    $("#main-image").attr("src",imageSrc);
    // selectedをリセットする
    $("#thumnail-list li").removeClass("selected");
    // 指定しているサムネイルにselectedクラスを付ける
    $(this).addClass("selected");
    // aタグのリンクを無効にする
    return false;
  });
});
*/




/**
 * 様々操作テクニックがある
 * イメージギャラリー
 * カルーセルパネル
 * ドロップダウンメニュー
 * ひとりツイッター
 */