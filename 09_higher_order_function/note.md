# 09 Higher Order Function

"Function yang beroperasi pada function yang lain. Baik itu digunakan dalam argument, maupun sebagai return value."
- eloquentjavascript.net

"JavaScript memperlakukan function sebagai object."
- sitepoint.com

```javascript
function kerjakanTugas(matakuliah, selesai) {
    console.log(`Mulai mengerjakan tugas ${matakuliah} ...`);
    selesai();
}

function selesai() {
    alert('Selesai mengerjakan tugas!');
}

kerjakanTugas('Pemrograman Web', selesai);
```

Dengan begini, function kerjakanTugas() disebut sebagai Higher Order Function.
Dan, function selesai() yang sebagai argument disebut Callback.

Atau contoh lain.

```javascript
setTimeout(function() {
    console.log('Hello JavaScript!');
}, 1000)
```

Atau contoh lain.

```javascript
const tombol = document.querySelector('.submit');

tombol.addEventListener('click', function() {
    consoloe.log('tombol ditekan!');
})
```

Atau contoh lain. yang return value nya adalah function.

```javascript
function ucapkanSalam(waktu) {
    return function(nama) {
        console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
    }
}

let selamatMalam = ucapkanSalam('Malam');

console.dir(selamatMalam('Rizqi'));
```

Kenapa harus pakai Higher Order Function?

1. Abstraksi, untuk membuat kode yang kita buat itu lebih sederhana/simple.

"Semakin besar sebuah program, semakin tinggi kompleksitasnya, semakin membinungkan programmernya."
- eloquentjavascript.net

"Ada dua cara untuk merancang sebuah software: Cara pertama adalah untuk membuat programnya se-sederhana mungkin sehingga jelas-jelas tidak ada kekurangannya, dan cara lainnya adalah untuk membuat programmnya se-kompleks mungkin sehingga tidak ada kekurangan yang jelas."
- C.A.R. Hoare, 1980 ACM Turing Award Lecture

## Contoh Higher Order Function

1. Array.prototype.map()
2. Array.prototype.filter()
3. Array.prototype.reduce()
