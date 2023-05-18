// Destructuring Function Return Value

// function penjumlahanPerkalian(a, b) {
//     return [a + b, a * b];
// }

// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];

// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);


// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b];
// }
//
// const [tambah, kurang, kali, bagi] = kalkulasi(2, 3);


// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }
//
// const { bagi, kali, tambah, kurang } = kalkulasi(2, 3);


// Destructuring Function Argument
const mhs1 = {
    nama1: 'Rizqi Nur Assyaufi',
    umur1: 34,
    email1: 'rizqiassyaufi@gmail.com',
    nilai1: {
        tugas: 80,
        uts: 85,
        uas: 75
    }
}

// function cetakMhs1(mhs) {
//     return `Halo, nama saya ${mhs.nama1}, saya berumur ${mhs.umur1} tahun.`
// }
//
// console.log(cetakMhs1(mhs1));

function cetakMhs1({ nama1: nama, umur1: umur, nilai1: { tugas, uts, uas } }) {
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya ${uas}.`
}

console.log(cetakMhs1(mhs1));
