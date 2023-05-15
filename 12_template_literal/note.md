# 12 template literals or template string

"Template Literal adalah string literal yang memungkinkan adanya expression di dalamnya."
- MDN Web Docs (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

```javascript
let nama = 'Rizqi Nur Assyaufi';
let nim = "1102007243";
let email = `rizqinur@students.universitasmulia.ac.id`;
```

## String Literal

- dibuat menggunakan backtick
- multi-line string
- embedded expression
- HTML fragments
- expression interpolation
- tagged template

```javascript
// string biasa
`string text`

// multi-line string
`string text baris 1
 string text baris 2
 string text baris 3`

// exprssion interpolation
`string text ${expression} string text`

// tagged tempalte
tag `string text ${expression} string text`

// HTML fragments
const mhs = {
    nama: 'Rizqi Nur Assyaufi',
    umur: 34,
    nim: 1102007243,
    email: 'rizqinur@students.universitasmulia.ac.id'
};

let el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nim}</span>
</div>`;

console.log(el);

// embedded expression
const nama = 'Rizi Nur Assyaufi';
let umur = 34;
console.log(`Halo, perkenalan nama saya ${nama}, saya ${umur} tahun.`);

// expression interpolation
let a = 10;
let b = 15;
console.log(`Jika a = 10 dan b = 15, maka hasil penjumlahannya adalah ${a + b}, bukan ${2 * a + b}.`);
```
