export class Person {
    constructor (name) {
        this._name = name;
    }
    getName() {
        return this._name;
    }
}

export class Employee extends Person {
    constructor (name, title) {
        super(name);
        this._title = title;
    }
    doWork() {
        return this._name + " is working";
    }
}

// let scott = new Employee();
// console.log(scott.doWork());

let scott = new Employee("Scott Moss");
console.log(scott.getName());
console.log(scott.doWork());

const rendy = new Person("Rendy Augusto");
// console.log(rendy.doWork()); // error


