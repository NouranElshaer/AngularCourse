let x:number;
x=4;
// x="";

let y:string;
// y=4;

let y2:string="hamada";

let z=4;    //type inferance{check the value to knoww the datatype}
// z="gg"

let b:boolean=true;
let a:any;
a={};
a=[5,"",{}];
a={};
a=true;


// class------
class Person{
    name:string;
    age:number;

    constructor(_name:string="initial",_age:number=20, public city:string="initial"){//what we did in city called syntax suger
        this.name=_name;
        this.age=_age;
    }

    getName():string{
        return this.name;
    }

    get Age(){
        return this.age ;
    }

    set Age(_age){
        this.age=_age
    }
}

let p = new Person("",22);


// tsc main.ts --target es5/es6/next

class Employee extends Person{

    constructor(_name:string="",_age:number=100,_city:string="",public salary:number=1000){
        super(_name,_age,_city);
    }

}
let e1= new Employee()

interface IPerson{
    name:string;
    age:number;
    

}

