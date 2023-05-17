// 1. HTML Fragments
// const mhs = {
//     nama: 'Rizqi Nur Assyaufi',
//     nim: '1501157',
//     email: 'rizqinur@students.universitasmulia.ac.id'
// };
//
// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nim">${mhs.nim}</span>
//     <span class="email">${mhs.email}</span>
// </div>`

// 2. Looping
// const mhs = [
//     {
//         nama: 'Rizqi Nur Assyaufi',
//         email: 'rizqinur@students.universitasmulia.ac.id'
//     },
//     {
//         nama: 'Muhammad Fajar Setiawan',
//         email: 'mfajar@students.universitasmulia.ac.id'
//     }
// ];
//
// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>nama: ${m.nama}</li>
//         <li>email: ${m.email}</li>
//     </ul>`).join('')}
// </div>`

// 3. Conditional
// ternary
// const lagu = {
//     judul: 'Tetap dalam Jiwa',
//     penyanyi: 'Isyana Sarasvati',
//     feat: 'Rayi Putra'
// }
//
// const el = `<div class="lagi">
//     <ul>
//         <li>Artist: ${lagu.penyanyi}</li>
//         <li>Song: ${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`

// 4. Nested
// HTML Fragments bersarang
const mhs = {
    nama: 'Rizqi Nur Assyaufi',
    semester: 5,
    mataKuliah: [
        'Rekayasa Web',
        'Analisis dan Perancangan Sistem Informasi',
        'Pemograman Sistem Interaktif',
        'Perancangan Sistem Berorientasi Objek'
    ]
}

function cetakMataKuliah(mataKuliah) {
    return `
        <ol>
            ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
        </ol>`
}

const el = `<div class="mhs">
        <h2>Nama: ${mhs.nama}</h2>
        <span class="semester">Semester: ${mhs.semester}</span>
        <h4>Mata Kuliah</h4>
        ${cetakMataKuliah(mhs.mataKuliah)}
    </div>`

document.body.innerHTML = el;
