// Rest Parameters

function myFunc(...myArgs) {
    // return `a = ${a}, b = ${b}, myArgs = ${myArgs}`
    // return myArgs;
    // return Array.from(arguments);
    return [...arguments];
}

console.log(myFunc(1, 2, 3, 4, 5));

function jumlahkan(...angka) {
    // let total = 0;
    // for (const n of angka) {
    //     total += n;
    // }
    // return total;
    return angka.reduce((a, b) => a + b);
}

console.log(jumlahkan(1, 2, 3, 4, 5));

// array destructuring
const kelompok1 = ['Rizqi', 'Devika', 'Erika', 'Fajar', 'Hendra'];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(ketua);
console.log(wakil);
console.log(anggota);

// object destructuring
const teamSatu = {
    pm: 'Rizqi',
    frontEnd1: 'Dody',
    frontEnd2: 'Erika',
    backEnd: 'Fajar',
    ux: 'Hendra',
    devOps: 'Fery'
}

const {pm, ...myTeam} = teamSatu;
console.log(pm);
console.log(myTeam);

// filtering
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type)
}

console.log(filterBy('number', 1, 2, 'Rizqi', false, 10, true, 'Dody'));
console.log(filterBy('string', 1, 2, 'Rizqi', false, 10, true, 'Dody'));
console.log(filterBy('boolean', 1, 2, 'Rizqi', false, 10, true, 'Dody'));
