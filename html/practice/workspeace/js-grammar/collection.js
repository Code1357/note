//***** Jsのコレクション 配列
// 記述：var 配列名 = [値, 値, 値, 値];　基本はSwiftと一緒
// 文字列、数値を入れれて添字がある
// 値の取り出しかた：配列名[添字];
var classes = ['A組', 'B組', 'C組', 'D組'];
var c = classes[0];
console.log(c);
console.log(classes[1]);
console.log(classes);

// 要素の追加
var a = []; // 空の配列
console.log(a);
console.log(a.length); // 結果：0　要素の数を数える length
a.push('X'); // 要素を現在の配列の後ろに追加する push
console.log(a);// 結果：[X]
console.log(a.length); // 結果：1
a.push(12) // Jsは、文字列と整数混合できる？？？
console.log(a);
console.log(a.length)

// 練習
var classes = ['A組', 11, 'C組', 'Z組'];
// 2重ループの場合、外側>内側と計算される/処理が終わったら変化式を計算する
    for (var grade = 1; grade < 4; grade++) {
        for (var i = 0; i < classes.length; i++) 
            // <p>○年○組</p>という文字列を作る
            document.write('<p>' + grade + '年' + classes[i] + '</p>');
}

/*
・繰り返しのイメージ　外側3回繰り返し　内側4回繰り返し
外側>内側>内側>内側>内側
外側>内側>内側>内側>内側
外側>内側>内側>内側>内側
*/

// 練習
var chars = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];

    for (var i = 0; i < chars.length; i++) {
        for (var n = 0; n < chars.length; n++)
        document.write( '<p>' + chars[i] + chars[n] + '</p>');
    }
// nameは処理するうえで適さない識別子（予約後とは別でエラーでない）
// 他にも適さない識別子あるため、注意が必要