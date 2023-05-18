// for...of
// Array
const mhs1 = ['Rizqi', 'Devika', 'Doddy', 'Erika'];

for (let i = 0; i < mhs1.length; i++) {
    console.log(mhs1[i]);
}

mhs1.forEach((m) => console.log(m));

mhs1.forEach((m, i) => console.log(`${i + 1} - ${m}`));

for (const m of mhs1) {
    console.log(m);
}

for (const [i, m] of mhs1.entries()) {
    console.log(`${i + 1} - ${m}`);
}


// String
const nama = 'JavaScript';
for (const n of nama) {
    console.log(n);
}


// NodeList
const liNama = document.querySelectorAll('.nama');

liNama.forEach((nama) => console.log(nama.innerHTML));

for (const nama of liNama) {
    console.log(nama.textContent);
}


// Arguments
function jumlahkanAngka() {
    // return arguments.reduce((a, i) => a + i); // tidak bisa
    // arguments.forEach(a => jumlah += a); // tidak bisa
    let jumlah = 0;
    for (a of arguments) {
        jumlah += a;
    }
    return jumlah;
}

console.log(jumlahkanAngka(1, 2, 3, 4, 5));


// for...in
const mhs2 = {
    nama: 'Rizqi Nur Assyaufi',
    umur: 34,
    email: 'rizqiassyaufi@gmail.com'
}

for (const m in mhs2) {
    console.log(`${m}: ${mhs2[m]}`);
}
