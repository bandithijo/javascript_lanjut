// Execution Context, Hoisting, Scope

// console.log(nama); // => undefined
// var nama = 'Rizqi';
// console.log(nama); // => 'Rizqi'

// CREATION PHASE pada Global Context
// yang terjadi adalah javascript akan mengecek apakah ada variabel dan function
// kalau ada variable, maka value dari variable akan diisi undefined
// kalau ada function, maka value dari function akan diisi oleh function itu sendiri
// window = global object
// this = window

// EXECUTION PHASE



// var nama = 'Rizqi Assyaufi';
// var umur = 34;
//
// console.log(sayHello());
//
// function sayHello() {
//     return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// }

// function membuat Local Execution Context
// yang di dalamnya terdapat creation dan execution phase
// selain bisa akses window, juga memiliki akses terhadap arguments (parameter dari function)



// var nama = 'Rizqi Assyaufi';
// var username = '@bandithijo';
//
// function cetakURL() {
//     console.log(arguments[0]);
//     var instagramURL = 'https://instagram.com/';
//     return instagramURL + username;
// }
//
// console.log(cetakURL('@devikamarina'));



// function a() {
//     console.log('ini a');
//
//     function b() {
//         console.log('ini b');
//
//         function c() {
//             console.log('ini c');
//         }
//
//         c();
//     }
//
//     b();
// }
//
// a();



function satu() {
    var nama = 'Rizqi Assyaufi';
    console.log(nama);
}

function dua() {
    console.log(nama);
}

function tiga() {
    console.log(arguments[0]);
}

console.log(nama); // => undefined
var nama = 'Erik';
satu(); // => 'Rizqi Assyaufi'
dua('Dody'); // => 'Erik'
tiga('Jody'); // => 'Jody'
console.log(nama); // => 'Erik'
