# 05 closure

## Definisi Closure

"Closure merupakan kombinasi antara function dan lingkungan leksikal (lexical scope) di dalam function tersebut."
- Mozilla MDN

"Closure adalah sebuah function ketika memiliki akses ke parent scope-nya, meskipun parent scope-nya sudah selesai dieksekusi."
- w3school

"Closure adalah sebuah function yang dikembalikan oleh function yang lain, yang memiliki akses ke lingkungan saat ia diciptakan."
- Code Fellow

"Closure adalah sebuah function yang sebelumnya sudah memiliki data, hasil dari function yang lain."
- Techsith

## Lexical Scope

```javascript
function init() {
    let nama = 'Rizqi Assyaufi'; // local variable
    function tampilNama() { // inner function (closure*)
        console.log(nama); // akses ke parent variable
    }
    tampilNama();
}
init();
```

## kenapa menggunakan closure?

1. "Untuk membuat function factories." - Mozilla Developer Network (MDN)
2. "Untuk membuat private method." - Mozilla Developer Network (MDN)
