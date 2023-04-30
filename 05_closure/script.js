// function init() {
//     let nama = 'Rizqi Assyaufi'; // local variable
//     function tampilNama() { // inner function (closure*)
//         console.log(nama); // akses ke parent variable
//     }
//     return tampilNama;
// }
// let panggilaNama = init();
// panggilaNama();


// function init() {
//     // let nama = 'Rizqi Assyaufi'; // local variable
//     return function(nama) { // inner function (closure*)
//         console.log(nama); // akses ke parent variable
//     }
// }
// let panggilaNama = init();
// panggilaNama('Rizqi Assyaufi');
// panggilaNama('Nur');


// Function Factories
// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Halo, ${nama}, Selamat ${waktu}! Semoga harimu menyenangkan!`);
//     }
// }
//
// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');
//
// selamatPagi('Rizqi');
// selamatSiang('Nur');
// selamatMalam('Assyaufi');


// Private Variable
// problem:
// let counter = 0;
// let add = function() {
//     return ++counter;
// }
//
// counter = 10;
//
// console.log(add());
// console.log(add());
// console.log(add());

// solution:
// let add = function() {
//     let counter = 0;
//     return function() {
//         return ++counter;
//     };
// }
//
// let a = add();
//
// console.log(a());
// console.log(a());
// console.log(a());

// convert to Immediately Invoked Function
let add = (function() {
    let counter = 0;
    return function() {
        return ++counter;
    };
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());
