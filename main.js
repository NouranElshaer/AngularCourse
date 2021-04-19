let x;
x = 4;
// x="";
let y;
// y=4;
let y2 = "hamada";
let z = 4; //type inferance{check the value to knoww the datatype}
// z="gg"
let b = true;
let a;
a = {};
a = [5, "", {}];
a = {};
a = true;
// class------
class Person {
    constructor(_name = "initial", _age = 20, city = "initial") {
        this.city = city;
        this.name = _name;
        this.age = _age;
    }
    getName() {
        return this.name;
    }
    get Age() {
        return this.age;
    }
    set Age(_age) {
        this.age = _age;
    }
}
let p = new Person("", 22);
// tsc main.ts --target es5/es6/next


