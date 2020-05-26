/* [ ] を使う場面,ブラケット記述 */

// 配列
const myArray = ['choko', 'kana']; // 配列を作る
myArray[0]; // 結果:choko
myArray[0][1]; // 結果:h

// オブジェクト1
// nameはプロパティ名,『'' or ""』でプロパティ名は括る方がよいが状況によっては省略可能
const obj = {
  'name': 'ちょこ',
  'age': 20
}
// プロパティにアクセスする
obj['name']; // 結果:ちょこ,プロパティの省略型でも否でも、[' ']で呼び出す必要がある
obj.name; // 結果：ちょこ,[]を使わずに呼び出す
// プロパティに追加
obj['address'] = '大阪';
obj.address = '大阪';

// オブジェクト2
const obj2 = {
  obj3: {
    'name2': 'ぷく',
    'age2': 30
  }
}
obj2['obj3']['name2']; // ぷく
obj2.obj3.name2; // 結果：ぷく

// オブジェクトプロパティは、オブジェクト内に存在する変数ともいえる
let objA = {
  'objPro': {
    'namePro': 'さる',
    'agePro': 40
  }
}
// オブジェクトプロパティ(変数)を変数keyNameに代入して呼び出す,代入した場合ブラケット記法が必要
let kyeName2 = 'objPro';
let kyeName = 'namePro';
objA[kyeName2][kyeName]; // 結果：さる
objA.kyeName2.kyeName; // 結果：エラー
objA[kyeName2]; // 結果：{namePro: "さる", agePro: 40}
objA.kyeName2; // 結果：undefined
objA[kyeName]; // 結果：undefined

// パラメータ(媒介変数、補助変数、母数、引数、設定値）を呼び出す
