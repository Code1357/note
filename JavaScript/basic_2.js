

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

let person1 = new Person('Bob', 'Smith', 32, 'male');

