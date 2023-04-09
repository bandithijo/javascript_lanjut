// Cara membuat Object pada JavaScript

// 1. Object Litaral
// PROBLEM: tidak efektif untuk pembuatan objek yang banyak
let mahasiswa11 = {
    nama: 'Rizqi Nur Assyaufi',
    energi: 10,

    makan: function(porsi) {
        this.energi = this.energi + porsi;
        console.log(`Halo, ${this.nama}, selamat makan!`);
    }
}

let mahasiswa12 = {
    nama: 'Devika Marina',
    energi: 13,

    makan: function(porsi) {
        this.energi = this.energi + porsi;
        console.log(`Halo, ${this.nama}, selamat makan!`);
    }
}


// 2. Function Declaration
// PROBLEM: dibelakang layar method di dalam objek tetap dibuat dan disimpan ke dalam memory
function MahasiswaBB(nama, energi) {
    let mahasiswa = {};

    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    mahasiswa.makan = function(porsi) {
        this.energi += porsi;
        console.log(`Halo, ${this.nama}, selamat makan!`);
    }

    mahasiswa.main = function(jam) {
        this.energi -= jam;
        console.log(`Halo, ${this.name}, selamat bermain!`);
    }

    return mahasiswa;
}

let mahasiswa21 = MahasiswaBB('Mahasiswa B1', 10);
let mahasiswa22 = MahasiswaBB('Mahasiswa B2', 20);


// 3. Constructor Function (keyword new)
// PROBLEM: dibelakang layar method di dalam objek tetap dibuat dan disimpan ke dalam memory
function MahasiswaCC(nama, energi) {
    this.nama = nama;
    this.energi = energi;

    this.makan = function(porsi) {
        this.energi += porsi;
        console.log(`Halo, ${this.nama}, selamat makan!`);
    }

    this.main = function(jam) {
        this.energi -= jam;
        console.log(`Halo, ${this.name}, selamat bermain!`);
    }
}

let mahasiswaC1 = new MahasiswaCC('Mahasiswa C1', 20);
let mahasiswaC2 = new MahasiswaCC('Mahasiswa C2', 30);


// 4. Object.create
// PROS: methodMahasiswa hanya dibuat 1 kali setiap proses instansiasi object
// PROBLEM: setiap penambahan method baru di dalam object methodMahasiswa, harus daftarin di dalam object MahasiswaDD
const methodMahasiswa = {
    makan: function (porsi) {
        this.energi += porsi;
        console.log(`Halo, ${this.nama}, selamat makan!`);
    },

    main: function (jam) {
        this.energi -= jam;
        console.log(`Halo, ${this.nama}, selamat bermain!`);
    },

    tidur: function (jam) {
        this.energi += jam * 2;
        console.log(`Halo, ${this.nama}, selamat tidur!`);
    }
}

function MahasiswaDD(nama, energi) {
    // let mahasiswa = {};
    let mahasiswa = Object.create(methodMahasiswa);

    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    // apabila menggunakan Object.create() tidak perlu lagi mendefinisikan method2 dari object methodMahasiswa
    // mahasiswa.makan = methodMahasiswa.makan;
    // mahasiswa.main = methodMahasiswa.main;
    // mahasiswa.tidur = methodMahasiswa.tidur;

    return mahasiswa;
}

let mahasiswaD1 = MahasiswaDD('Mahasiswa D1', 40);
let mahasiswaD2 = MahasiswaDD('Mahasiswa D2', 50);
