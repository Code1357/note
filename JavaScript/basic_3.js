function Person(first, last, age, gender) {
    this.name = {
        first: first,
        last: last
    };
    this.age = age;
    this.gender = gender;
    this.bio = function () {
        alert(this.name.first + this.name.last + ' is ' + this.age);
    };
    this.greeting = function () {
        alert('名簿のできあがり!');
    };
}

let person1 = new Person('ちょこ', 'ぷく', 39, 'men');

person1.constructor

var person3 = new person1.constructor('太郎', '山田', 33, 'male');




/** prototypeを使った継承 **/

// 空のオブジェクトを2つ用意
var User = function () {};
var Member = function () {};

// まず、Userオブジェクトに hell()というメソッドを定義する,コントラクト関数
User.prototype.hello = function (name) {
    return name + 'さん、こんにちは！';
}

// インスタンス化しながら、継承(Memberのプロトタイプに代入)
Member.prototype = new User();
    /* 内部的にあるもの(Member.prototypeのコントラクト関数)

        Member.prototype.hello = function(name) {
        return name + 'さん、こんにちは！';
        }

    */

// constructor.prototypeのコントラクタの名前を確認
Member.prototype.constructor.name // User,　継承されている
// constructor.prototypeのコントラクタの存在を確認
Member.prototype instanceof User;  // true, 継承されている


// それぞれのメソッドを使えるようにしてあげるためにインスタンス化
const choko = new User();
const puku = new Member();

console.log(choko.hello('ちょこ'));
console.log(puku.hello('ぷく'));

