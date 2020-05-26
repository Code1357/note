const person = {
  name: ['choko', 'kana'],
  age: 39,
  gender: 'men',
  profile: function () {
    alert(this.name[0] + this.age + this.gender);
  },
  family: {
    familyStructure: 5,
    zoo: 'dog'
  },
  eyes: 'BLACK',
  farewell: function () {
    alert("Bye everybody!");
  }
}




var myDataName = 'height';
var myDataValue = '1.75m';
person[myDataName] = myDataValue;


const person = {
  name: ['choko', 'kana'],
  profile: function () {
    alert(this.name[0]);
  }
}

person.profile();

var myString = 'ドラえもん,のびた,しずかちゃん';

// 実行
myString.split(',');

/* 結果
(3) ["ドラえもん", "のびた", "しずかちゃん"]
0: "ドラえもん"
1: "のびた"
2: "しずかちゃん"
*/