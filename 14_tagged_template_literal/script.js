// Tagged Templates
// const nama = 'Rizqi Nur Assyaufi';
// const umur = 34;
//
// function coba(strings, ...args) {
//     // let result = '';
//     // strings.forEach((str, index) => {
//     //     result += `${str}${args[index] || ''}`
//     // });
//     // return result;
//
//     return strings.reduce((result, str, index) => `${result}${str}${args[index] || ''}`, '')
// }
//
// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
//
// console.log(str);

// Highlight
const nama = 'Rizqi Nur Assyaufi';
const umur = 34;
const email = 'bandithijo@duck.com'

function highlight(strings, ...args) {
    return strings.reduce((result, str, index) => `${result}${str}<span class="hl">${args[index] || ''}</span>`, '');
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun, dan email saya adalah ${email}.`;

document.body.innerHTML = str;
