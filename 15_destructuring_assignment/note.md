# 15 Destructuring Assignment / Destructuring Variable

"Expression pada JavaScript yang membuat kita dapat 'membongkar' nilai dari array atau properti dari object ke dalam variabel yang terpisah."
- MDN Web Docs (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

Array

```javascript
const coba = ['satu', 'dua', 'tiga'];

const [a, b, c] = coba;
console.log(a); // "satu"
console.log(b); // "dua"
console.log(c); // "tiga"
```

Object

```javascript
const mhs = {
    nama: 'Rizqi Nur Assyaufi',
    umur: 34,
    email: 'rizqinur@students.universitasmulia.ac.id'
};

const {nama, umur, email} = mhs;
console.log(nama); // "Rizqi Nur Assyaufi"
console.log(umur); // 33
console.log(email); // "rizqinur@students.universitasmulia.ac.id"
```
