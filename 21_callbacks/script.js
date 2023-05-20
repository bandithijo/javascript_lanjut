// Callback
// Synchronous Callback
// function halo(nama) {
//     alert(`Halo, ${nama}!`);
// }

// function tampilPesan(callback) {
//     const nama = prompt('Masukkan nama kamu');
//     callback(nama);
// }

// tampilPesan(halo);
// tampilPesan(nama => alert(`Halo, ${nama}!`));

// const mhs = [
//     {
//         "nama": "Rizqi Nur Assyaufi",
//         "nrp": "1501147",
//         "email": "rizqinur@students.universitasmulia.ac.id",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 1
//     },
//     {
//         "nama": "Muhammad Fajar Setiawan",
//         "nrp": "1501153",
//         "email": "mfajar@students.universitasmulia.ac.id",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 2
//     },
//     {
//         "nama": "Rachmat Saudi Al Fathir AS",
//         "nrp": "1501032",
//         "email": "fathir@students.universitasmulia.ac.id",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 2
//     }
// ];
//
// console.log('mulai');
// mhs.forEach(m => {
//     for (let i = 0; i < 10000000; i++) {
//         let date = new Date();
//     };
//     console.log(m.nama);
// });
// console.log('selesai');


// Asynchronous Callback
// Vanilla JavaScript
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();
//
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status === 404) {
//                 error();
//             }
//         }
//     }
//
//     xhr.open('get', url);
//     xhr.send();
// }
//
// console.log('mulai');
// getDataMahasiswa('./data/mahasiswa.json', results => {
//     // console.log(JSON.parse(results));
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {
//
// })
// console.log('selesai');


// JQuery
console.log('mulai');
$.ajax({
    url: './data/mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: (e) => {
        console.log(e.responseText);
    }
})
console.log('selesai');
