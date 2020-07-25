// Fungsi menghitung luas lingkaran
function luasLingkaran(r) {
    let area =  Math.PI*(Math.pow(r,2));
    let answer = parseFloat(area.toFixed(2));  // untuk pembulatan 2 angka di belakang koma
    return `Luas lingkaran dengan jari-jari ${r} adalah ${answer}`;
}
console.log('\n');
console.log(luasLingkaran(10));
console.log('\n');


// Fungsi menghitung luas segitiga
function luasSegiTiga(a, t) {
    let area = a*t/2;
    let answer = parseFloat(area.toFixed(2)); // untuk pembulatan 2 angka di belakang koma
    return `Luas segitiga degan alas ${a} dan tinggi ${t} adalah ${answer}`;
}

console.log(luasSegiTiga(3, 10));
console.log('\n');



// Fungsi menghitung luas persegi
let luasPersegi = (sisi) => {
    let area = sisi*sisi;
    let answer = parseFloat(area.toFixed(2));  // untuk pembulatan 2 angka di belakang koma
    return `Luas persegi dengan sisi ${sisi} adalah ${answer}`;
}

console.log(luasPersegi(13));



console.log('\n');

// Daftar Alat Tulis
var daftarAlatTulis = ["2. Pensil", "5. Penghapus", "3. Pulpen", "4. Penggaris", "1. Buku"];
let urutan = daftarAlatTulis.sort();
let max = daftarAlatTulis.length-1;
let i = 0;

while(i <= max) {
    console.log(urutan[i]);
    i++;
}




console.log('\n');




// Tampilkan bintang
function tampilkanBintang(jumlahBintang) {
    let bintang ='';
    for (let i=jumlahBintang; i>0; i--) {
        for (let j=0; j<i; j++) {
            bintang += '*';
        }
        bintang +='\n'
    }
    console.log(`Jumlah bintang maksimal adalah: ${jumlahBintang} \n`)
    console.log(bintang);
}
tampilkanBintang(5);











console.log('\n');

// Pengondisian
var jenisKelamin;
var nama;

let sapa = (nama, jenisKelamin) => {
    if (jenisKelamin === "L") {
        nama = "Bapak " + nama; 
    } else if (jenisKelamin === "P") {
        nama = "Ibu " + nama;
    } else {
        return `Jenis kelamin ${nama} tidak diketahui / terjadi kesalahan dalam penginputan`;
    }
    return nama;
}

console.log(sapa("Suwandi", "L"));






