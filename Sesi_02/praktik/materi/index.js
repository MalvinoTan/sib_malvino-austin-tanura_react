// const user = {};
// user.name = 'Malvino Austin Tanura';
// user.handle = '@malvino';
// user.location = 'Binjai, Indonesia';

// // extraction
// const name = user.name;
// const handle = user.handle;
// const location = user.location;
// console.log(name, handle, location);

// const user = {
//     name: 'Malvino Austin Tanura',
//     handle: '@malvino',
//     location: 'Binjai, Indonesia'
// };

// // extraction
// const name = user.name;
// const handle = user.handle;
// const location = user.location;
// console.log(name, handle, location);

// const user = {
//     name: 'Malvino Austin Tanura',
//     handle: '@malvino',
//     location: 'Binjai, Indonesia'
// };

// // extraction
// const { name, handle, location } = user;
// console.log(name, handle, location);

const getUser = () => {
    return {
        name: 'Malvino Austin Tanura',
        handle: '@malvino',
        location: 'Binjai, Indonesia'
    };
};

// // extraction
// const { name, handle, location } = user;
// console.log(name, handle, location);

const csv = "1997,Ford,F350,Must Sell!";

const [ year, make, model, description ] = csv.split(",");
console.log(year,make, model, description);

const user = {
    n: 'Malvino Austin Tanura',
    h: '@malvino',
    l: 'Binjai, Indonesia'
};

// extraction
const { n: name1, h: handle1, l: location1 } = user;
console.log(name1, handle1, location1);

console.log(this == window);

function changeColor() {
    this.document.body.style.backgroundColor = 'red';
}

changeColor();

let counter = {
    val: 0,
    increment: function () {
        this.val += 1
    }
}

const btn = document.querySelector("#button");
btn.addEventListener('click', function () {
    this.style.backgroundColor = 'green';
    counter.increment();
    console.log(counter.val);
});

// function declaration
function add1 (a, b) {
    return a + b;
}

// function expression
const add2 = function (a, b) {
    return a + b;
}

// arrow function
const add3 = (a, b) => {
    return a + b;
}

// function add(a, b) {
//     return a + b;
// }

const add = (a, b) => a + b;

// function square(x) {
//     return x * x;
// }

const square = x => x * x;

// function three() {
//     return 3;
// }

const three = () => 3;

console.log(add(1, 2));
console.log(square(2));
console.log(three());

const tambah = (a, b) => {
    const temp = a + b;
    return temp;
}

console.log(tambah(3, 3));

function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++;
        console.log(this.age);
    }, 1000);
}

const p = new Person();

const printTick = () => {
    console.log("Tick");
}

setInterval(printTick, 1000);


const animals = [
    { name: "Fluffy", species: "cat" },
    { name: "Carlo", species: "dog" },
    { name: "Nemo", species: "fish" },
    { name: "Hamilton", species: "dog" },
    { name: "Dory", species: "fish" },
    { name: "Ursa", species: "cat" }
];

let fish = [];
for (let i = 0; i < animals.length; i++) {
    if (animals[i].species === "fish") {
        fish.push(animals[i]);
    }
}

console.log(fish);

fish = animals.filter((animal) => animal.species === "fish");

console.log(fish);

let names = [];
for (let i = 0; i < animals.length; i++) {
    names.push(animals[i].name);
}

console.log(names);

names = animals.map((animal) => animal.name);

console.log(names);

names = animals.map((animal) => animal.name + " is a " + animal.species);

console.log(names);

let orders = [
    { total: 325 },
    { total: 512 },
    { total: 128 },
    { total: 32 }
];

let total = 0;
for (let i = 0; i < orders.length; i++) {
    total = total + orders[i].total;
}
console.log(total);

total = orders.reduce((total, order) => total + order.total, 0);

console.log(total);
