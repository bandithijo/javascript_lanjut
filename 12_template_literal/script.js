// Template Literals / Template String
const nama = 'Rizqi Nur Assyaufi';
const umur = 34;
console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun.`);

// Embedded Expression
const x = 10;
console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

// HTML Fragments
const mhs = {
    nama: 'Rizqi Nur Assyaufi',
    email: 'bandithijo@gmail.com'
}
const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="email">${mhs.email}</span>
</div>`
console.log(el);
