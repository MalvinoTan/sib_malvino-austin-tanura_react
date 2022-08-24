let score;
score = 50;

let playerName = "Malvino";
alert(playerName);

playerName =  "Austin";
alert(playerName);

const pi = 3.14;
// pi = 5.12; // error

// let let = 0; // error

let weight = 75;
alert(weight + 15);

// let originalNum = 23;
// let newNum = originalNum + 7;
// alert(newNum);

let originalNum = 23;
let numberToBeAdded = 7;
let newNum = originalNum + numberToBeAdded;
alert(newNum);

alert("Hello class Modern Javascript!");

console.log('Selamat datang di kelas Modern Javascript Dasar');
console.log('Nama saya Budi');
console.log("JavaScript is fun!");

let message = 'Welcome!';
alert(message);
message = 'Bye, bye';
alert(message);

message = "She's a great person";
alert(message);
message = 'She\'s a great person';
alert(message);

let htmlSnippet = '<h1 class="header">This is a header</h1>';
console.log(htmlSnippet);
htmlSnippet = "<h1 class=\"header\">This is a header</h1>";
console.log(htmlSnippet);

let visitor = prompt('Siapakah namamu?');
let message2 = 'Halo ' + visitor;
alert(message2);

visitor = prompt('Siapakah namamu?');
message2 = 'Halo ' + visitor + '. Selamat datang di kelas Modern JavaScript!' + 'Kita senang sekali kamu mau datang berkunjung, ' + visitor + '. Semoga kamu berkenan datang kembali untuk belajar bersama.';
alert(message2);

visitor = prompt('Siapakah namamu?');
message2 = 'Halo ' + visitor;

message2 = message2 + '. Selamat datang di kelas Modern JavaScript!';

message2 += 'Kita senang sekali kamu mau datang berkunjung, ';

message2 += visitor + '. Semoga kamu berkenan datang kembali untuk belajar bersama.';
alert(message2);

let isRaining = true;
let isFinished = true;
let menuOpen = "true";

// var kode = ["React", "Php", "Ruby"];
// let kode =["React", "Php","Ruby"];
const kode = ["React", "Php","Ruby"];

var fruits = ['anggur', 'melati', 'apel', 'jeruk'];

var buah_buahan = ['strawberry', 'pir', 'durian'];

fruits.push.apply(fruits, buah_buahan);

var fruits = ['anggur', 'melati', 'apel', 'jeruk'];

var index_yang_ingin_dihapus = 1; // karena fruits[1] = melati, kita ingin menghapus melati dari array buah-buahan ini

fruits.splice(index_yang_ingin_dihapus, 1);

var fruits = ['anggur', 'melati', 'apel', 'jeruk'];
fruits = [];

var fruits = ['anggur', 'melati', 'apel', 'jeruk'];
fruits.splice(0, fruits.length);