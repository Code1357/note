let textarea = document.querySelector('.textarea');

let string_num = document.querySelector('.string_num');

// keyup : キーが離された時
textarea.addEventListener('keyup', onKeyUp);

function onKeyUp() {
  const inputText = textarea.value;
  string_num.innerText = inputText.length;
}

//
const btn = document.
querySelector('.btn');
btn.addEventListener('click', (event) => {
  console.log('event');
});

//
const ev = () => {
  console.log('押されてるかな？');
}

const btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', ev);

//
console.log(Array.from('dd').length);
console.log('#'.length);


// 関数に値を渡しつつ2回実行する関数！！
function doTwiceWithValue(func) {
  func('Hello!'); // 1回目！
  func('I am here!!!'); // 2回目！
}

// 受け取ったmessageを表示するだけの関数を渡す
doTwiceWithValue(function (message) {
  console.log(message);
});

//

const date = new Date();
const year = date.getFullYear();

document.querySelector('.log').innerText = `今年は西暦${year}年です`;

const st = '時';
const st2 = '分';
console.log(`${new Date().getHours()}時${new Date().getMinutes()}分`);

const day = date.getDay();
dayList = ['日', '月', '火', '水', '木', '金', '土', '真r']
console.log(dayList[day + 3]);

console.log(date);
console.log(date.toLocaleDateString()); // その国の年日を取得できる
console.log(date.toTimeString()); // その国の時間を取得できる

const el = document.querySelector('#my').value;
const value = el.value;
console.log(value);

//
const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('orange');
  }, 1000)
});

promise.then((value) => {
  console.log(value);
});


// Promisで処理の成功時(resolve)、失敗時(reject)の処理を行う
// const flag = false;

new Promise((resolve, reject) => {
  if (flag) { // trueかfalseで変わる flagは変数
    resolve('orenge');
  } else {
    reject('apple');
  }
})
.then((value) => { // メソッドチェーン 『.』の前に『;』で閉めないように注意
  console.log(value);
})
.catch((value) => {
  console.log(value);
});

/* アナログ時計作成 */

/* アナログ時計ここまで */

// 関数練習
const zz = () => {
  console.log('猿も木からおちた');
}

const result = zz;
result();

// 即時関数
const ar = ((a, b) => {
  console.log(a + b);
})(5, 11);

ar;

const g = (() => {
  const name = 'ちょこ';
  return name;
})();
console.log(g);

// 

const sett = setTimeout(() => {
  console.log('遅れて表示されるよ');
}, 2000);

const se = () => {
  console.log('ボタンを押したらから表示されたよ');
}

const btn3 = document.querySelector('.btn3');
const btnev = btn3.addEventListener('click', se);
