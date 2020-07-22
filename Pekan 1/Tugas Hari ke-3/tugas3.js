// Jawaban Soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

function upperCase(string) {
    return string.toUpperCase();
}
function kapital(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let kata2 = kapital(kataKedua);
let kata4 = upperCase(kataKeempat);
console.log(`${kataPertama} ${kata2} ${kataKetiga} ${kata4}`);




// Jawaban Soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

let arr = [
    kataPertama,
    kataKedua,
    kataKetiga,
    kataKeempat
]
function konversi(value,index) {
    arr[index] = (parseInt(value));
}

arr.forEach(konversi);
console.log(
    arr.reduce(function(a,b) {
        return a+b;
    })
);







// Jawaban Soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14); 
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 31);

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);








// Jawaban Soal 4
let index;
function getNilai(nilai) {
    if (nilai) {
        if (nilai <= 100) {
            if (nilai >= 80) {
                index = 'A';
            } else if(nilai >=70 && nilai<80 ) {
                index = 'B';
            } else if(nilai >=60 && nilai<70 ) {
                index = 'C';
            } else if(nilai >=50 && nilai<60 ) {
                index = 'D';
            } else {
                index = 'E';
            }
        } else {
            return 'Nilai terlalu besar (maksimal 100)';
        }
        return `Nilai ${nilai} tergolong indeks ${index}`;
    } else {
        return 'Belum ada nilai dimasukkan';
    }
}
// Perintah untuk mengecek nilai
console.log(getNilai(30));






// Jawaban Soal 5
var tanggal = 19;
var bulan = 6;
var tahun = 1996;

switch(bulan) {
    case 6: {
        bulan = 'Juni';
        break;
    }
    default: {
        bulan = 'Bulan lahir salah';
    }
}
console.log(`${tanggal} ${bulan} ${tahun}`);