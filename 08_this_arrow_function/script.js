// Konsep this pada Arrow Function

// Constructor Function
// const Mahasiswa = function() {
//     this.nama = 'Rizqi Nur Assyaufi';
//     this.umur = 34;
//     this.sayHello = function() {
//         return `Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`;
//     }
// }
// const mahasiswa = new Mahasiswa();


// Arrow Function
// const Mahasiswa = function() {
//     this.nama = 'Rizqi Nur Assyaufi';
//     this.umur = 34;
//     this.sayHello = () => {
//         return `Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`;
//     }
// }
// const mahasiswa = new Mahasiswa();


// Object Literal
// const mhs1 = {
//     nama: 'Rizqi Nur Assyaufi',
//     umur: 34,
//     sayHello: () => {
//         // Arrow Function tidak memiliki konsep this
//         return `Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`;
//     }
// }


// const Mahasiswa = function() {
//     this.nama = 'Rizqi Nur Assyaufi';
//     this.umur = 34;
//     this.sayHello = () => {
//         return `Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`;
//     }
//
//     setInterval(() => {
//         console.log(this.umur++);
//     }, 1000);
// }
// const mahasiswa = new Mahasiswa();


const box = document.querySelector('.box');
box.addEventListener('click', function() {
    // console.log(this);
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);

    setTimeout( () => {
        this.classList.toggle(dua);
    }, 600)
})
