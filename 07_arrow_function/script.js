// Function Expression
// const tampilNama = function(nama) {
//     return `Hello, ${nama}!`;
// }
//
// console.log(tampilNama('Rizqi'));

// Arrow Function
// tanda () pada parameter adalah optional apabila 1 parameter
const tampilNamaSatu = (nama) => {
    return `Hello, ${nama}!`;
}
console.log(tampilNamaSatu('Rizqi Nur Assyaufi'));

// Implicit Return
const tampilNamaDua = nama => `Hello, ${nama}! (with implicit return)`;
console.log(tampilNamaDua('Rizqi Nur Assyaufi'));

// Arrow Function with more than one parameter
// tanda () pada parameter adalah wajib apabila paremeter lebih dari satu
const tampilNamaTiga = (nama, waktu) => {
    return `Selamat ${waktu}, ${nama}!`;
}
console.log(tampilNamaTiga('Rizqi', 'Pagi'));

// Arrow Function without paremter
// tanda () wajib ditulis apabila tidak memiliki parameter
const tampilNamaEmpat = () => {
    return `Selamat JavaScript!`;
}
console.log(tampilNamaEmpat());

// Function map
let mahasiswa = ['Rizqi', 'Nur', 'Assyaufi'];

// let jumlahHuruf = mahasiswa.map(function(nama) {
//     return nama.length
// })
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map( nama => {
//     return nama.length;
// })
// console.log(jumlahHuruf)

let jumlahHuruf = mahasiswa.map( nama => ({
    // nama: nama,
    nama, // di JavaScript versi baru, apabila property sama dengan attributenya, cukup ditulis satu saja
    jmlHuruf: nama.length
}))
console.table(jumlahHuruf);
