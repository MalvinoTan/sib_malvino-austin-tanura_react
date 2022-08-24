/**

1. Apa itu variabel
Variabel adalah tempat penyimpanan suatu data maupun informasi

2. Apa pentingnya variabel
Berguna untuk menyimpan data dengan lebih deskriptif dan sesuai dengan data apa yang ingin disimpan

3. Mendeklarasikan variabel
let nama;
const pi;

4. Mengisi variable dengan nilai atau value
let nama;
nama = "Malvino";

5. Memberi nama variabel yang baik
Secara umum, nama variable hanya boleh mengandung angka, huruf, tanda dolar dan underscore atau garis bawah. Tapi hanya huruf yang boleh berada di paling depan nama variable.
Bad: @qty, Naga#, 7siput
Good: count, isPrime, checkPrime, loading_time

6. Apa itu tipe data
Tipe data adalah jenis dari suatu data

7. Berbagai jenis tipe data
Tipe data paling umum di Javascript:
 - String
 - Number
 - Boolean

8. Tipe data number dan pengoperasiannya
Tipe data berupa angka.
Contoh: 90 dan 1.4 
Bisa digunakan untuk operasi matematika.

9. Tipe data string dan cara memanipulasinya
Biasanya digunakan untuk kata, kalimat atau teks lainnya.
Contoh:
"Malvino Austin Tanura"
'ini adalah text'
Boleh petik satu maupun petik dua

Teknik manipulasi string:
Menggabungkan string (menggunakan tanda tambah (+))
let text1 = "Malvino";
let text2 = text1 + " Austin"; atau ket text2 += text1 + " Austin";

console.log(text2);
Output: Malvino Austin

10. Tipe data boolean
Tipe data yang hanya memiliki 2 nilai yaitu true dan false.
Contoh: let isFinished = true;
Jika ditambahkan petik dua menjadi “true” maka itu adalah string, bukan Boolean.

11. Bagaimana mengetahui tipe data dari sebuah variabel
typeof variabel

12. Apa itu Array
Merupakan tipe data structured. Array bisa dibayangkan seperti sebuah list.

13. Apa itu jenis Array
Array Multidimensi
Array multidimensi merupakan array di dalam array.

14. Mengisi Array
Posisi elemen dalam array dimulai dari index 0.

Untuk menambahkan isi array bisa menggunakan push().
Untuk menghapus isi array (dari belakang) bisa menggunakan pop().

Array di Javascript bisa berisi berbagai tipe data dalam satu array, tetapi disarankan hanya pakai satu tipe data di dalam satu array.

Deklarasi array:
var kode = ["React", "Php", "Ruby"];
let kode = ["React", "Php", "Ruby"];
const kode = ["React", "Php", "Ruby"];

Operasi array:
Merge 2 array: array1.push.apply(array1, array2)
Menghapus item: array.splice(index_yang_ingin_dihapus, 1)
Mengosongkan array: array.splice(0, array.length)

*/