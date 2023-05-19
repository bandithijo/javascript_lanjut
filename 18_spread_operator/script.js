// Spread Operator
// memecah iterables menjadi single element
const mhs1 = ['Rizqi', 'Devika', 'Erika'];
console.log(...mhs1[0]);

// kapan kita menggunakan Spread Operator?
// untuk menggabungkan 2 atau lebih array
const mhs2 = ['Rizqi', 'Devika', 'Erika'];
const dosen2 = ['Ade', 'Hendra', 'Wanda'];
// const civitas = mhs2.concat(dosen2);
const civitas = [...mhs2, 'Aji', ...dosen2];
console.log(civitas);

// meng-copy array
const mhs3 = ['Rizqi', 'Devika', 'Erika'];
// const mhs4 = mhs3; // tidak benar-benar meng-copy array, apabila nilai salah satu element dari mhs4 diubah, maka index yang sama dari mhs3 juga ikut berubah.
const mhs4 = [...mhs3];
console.log(mhs3);
mhs4[0] = 'Fajar';
console.log(mhs4);

// dari HTML
const liMhs5 = document.querySelectorAll('li'); // liMhs5 adalah NodeList, bukan Array
// const mhs5 = [];
// for (let i = 0; i < liMhs5.length; i++) {
//     mhs5.push(liMhs5[i].textContent);
// }
const mhs5 = [...liMhs5].map((m) => m.textContent);
console.log(mhs5);

// lebih practical
const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;
