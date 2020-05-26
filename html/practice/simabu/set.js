// listAの設定例,配列OK,listAの中にobjや配列、さらに配列の中にobjを設定する事も可能
// カーソルを合わせると、propertyかmethodをエディタが教えてくれる
let listA = {
    cerature: {
        zoo: ['ごりら', 'さる', 'ひつじ'],
        human: ['アメリカ人', '日本人', 'ドイツ人'],
        number: 1 
        },
    studyTools: {
        desk: 1,
        pen: 12,
        note: 2
        },
    plan() { /*処理*/ }
};

// 基本的なアクセス方法
// listA.を入力した時に補完が出てくる。左のBoxのマークでproperty(青いBox)かmethod(赤いBox)などを見極められる
// 補完のabcは、ファイル内に使われているただのtext

listA.cerature;
listA.cerature.zoo;
listA.cerature.zoo[1];

// 角括弧を用いたアクセス方法もある,変数を中に入れる場合は、この方法が必要？
listA['cerature'];
listA['cerature']['zoo'];
listA['cerature']['zoo'][1];


// 他のファイルに定義したObjectをexportする記述,今回のimport先は、importA.js
// exportして、役割ごとにファイルを管理する事で、管理しやすくなる
export default listA; 

// あらかじめ用意されているmethodは、Object内で定義されている,定義されているものを「.」を挟んで呼び出す
// methodの役割を理解する必要はあるが、補完機能を使えば記述が楽になる
// 補完機能の[Box]はインターフェースを表示している

window.console.log(); // windowは省略可能

window.alert(); // 補完で赤Box(method)なので、実行には()が必要

window.document.getElementById();

window.screen.height // 補完で青Box(property)なので、()不要
