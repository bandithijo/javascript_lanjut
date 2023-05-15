const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka yang lebih besar sama dengan 3
// for
const newAngkaWithFor = [];
for(let i = 0; i < angka.length; i++) {
    if(angka[i] >= 3) {
        newAngkaWithFor.push(angka[i]);
    }
}
console.log(`newAngka using for: [${newAngkaWithFor}]`);

// filter
const newAngkaWithFilter = angka.filter((a) => {
    return a >= 3;
})
console.log(`newAngka using filter: [${newAngkaWithFilter}]`);

// map
// task: kalikan 2 semua element yang ada di angka
const newAngkaWithMap = angka.map((a) => {
    return a * 2;
})
console.log(`newAngka using map: [${newAngkaWithMap}]`);

// reduce
// task: jumlahkan seluruh element pada array
const newAngkaWithReduce = angka.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})
console.log(`newAngka using reduce: ${newAngkaWithReduce}`);

// Method Chaining
// task: cari angka > 5, kalikan 3, jumlahkan semua elementnya
const hasilMethodChaining = angka.filter(a => a > 5) // 8, 9, 9
    .map(a => a * 3) // 24, 27, 27
    .reduce((acc, cur) => acc + cur); // 78
console.log(`Method Chaining: ${hasilMethodChaining}`);
