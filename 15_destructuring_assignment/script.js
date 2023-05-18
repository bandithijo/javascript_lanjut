// Destructuring Variable / Assignment

// Destructuring Array
const perkenalan = ['Halo', 'nama', 'saya', 'Rizqi Assyaufi']
// const [salam, satu, dua, nama] = perkenalan;
// skipping items
const [salam, , , nama] = perkenalan;
console.log(salam);
console.log(nama);
// swap items
let a = 1;
let b = 2;
console.log(a);
console.log(b);
[a, b] = [b , a];
console.log(a);
console.log(b);
// return value pada function
function coba() {
    return [10, 20];
}
const [aa, bb] = coba();
console.log(aa);
console.log(bb);
// rest parameter
const [aaa, ...bbb] = [100, 200, 300, 400, 500]
console.log(aaa);
console.log(bbb[0]);
console.log(bbb[1]);
console.log(bbb[3]);

// Destructuring Object
const mhs1 = {
    nama1: 'Rizqi Nur Assyaufi',
    umur1: 34,
}
const {nama1, umur1} = mhs1;
console.log(nama1);
console.log(umur1);
// assignment tanpa deklarasi objek
({ nama2, umur2 } = {
    nama2: 'Rizqi N. Assyaufi',
    umur2: 34
});
console.log(nama2);
console.log(umur2);
// assignment ke variable baru
const mhs3 = {
    nama3: 'Rizqi Nur A.',
    umur3: 34,
}
const {nama3: nm, umur3: mr} = mhs3;
console.log(nm);
console.log(mr);
// memberikan nilai default value
const mhs4 = {
    nama4: 'R. Nur Assyaufi',
    umur4: 34,
    email4: 'rizqinur@students.universitasmulia.ac.id'
}
const {nama4, umur4, email4 = 'email@default.com' } = mhs4;
console.log(email4);
// memberikan nilai default value + assignment ke variable baru
const mhs5 = {
    nama5: 'R. Nur Assyaufi',
    umur5: 34,
    email5: 'rizqinur@students.universitasmulia.ac.id'
}
const {nama5: nam, umur5: umu, email5: ema = 'email@default.com' } = mhs5;
console.log(ema);
// rest parameter
const mhs6 = {
    nama6: 'R. Nur Assyaufi',
    umur6: 34,
    email6: 'rizqinur@students.universitasmulia.ac.id'
}
const {nama6, ...values } = mhs6;
console.log(nama6);
console.log(values.umur6);
console.log(values.email6);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs7 = {
    id: 123,
    nama7: 'Rizqi Nur Assyaufi',
    umur7: 34,
    email7: 'rizqinur@students.universitasmulia.ac.id'
}
function getIdMhs({id, nama7 }) {
    return `${nama7} (${id})`
}
console.log(getIdMhs(mhs7));
