// ambil semua element video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih hanya yang 'JAVASCRIPT LANJUTAN'
let jsLanjut = videos.filter((video) => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi masing-masing video
    .map((item) => item.dataset.duration)

// ubah durasi menjadi integer, ubat menit menjadi detik
    .map((time) => {
        // 10:30 -> [10, 30] split
        const parts = time.split(':').map(part => parseInt(part));
        return (parts[0] * 60) + parts[1];
    })

// jumlahkan semua detiknya
    .reduce((total, detik) => total + detik);

// ubar formatnya jadi jam, menit, detik
const jam = Math.floor(jsLanjut / 3600);
const menit = Math.floor((jsLanjut - jam * 3600) / 60);
const detik = (jsLanjut - jam * 3600) - menit * 60;

// simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;

const jmlVideo = videos.filter((video) => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} Video`
