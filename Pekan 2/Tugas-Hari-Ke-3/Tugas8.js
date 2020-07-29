// Jawaban Soal 1
console.log(`------ dibawah ini adalah jawaban Soal 1 ------`);

const luasLingkaran = (r) => {
    let luas = Math.PI*(r*r); // raw data hasil
    let result = parseFloat(luas.toFixed(2)); // pembulatan 2 angka di belakang koma dan mengubah tipe data menjadi number
    return `Luas lingkaran dengan jari-jari ${r} adalah ${result}`;
}

const kelilingLingkaran = (r) => {
    let keliling = Math.PI*2*r; // raw data hasil
    let result = parseFloat(keliling.toFixed(2)); // pembulatan 2 angka di belakang koma dan mengubah tipe data menjadi number
    return `Keliling lingkaran dengan jari-jari ${r} adalah ${result}`;
}
console.log(luasLingkaran(10));
console.log(kelilingLingkaran(10));
console.log('\n');








// Jawaban Soal 2
console.log(`------ dibawah ini adalah jawaban Soal 2 ------`);
let kalimat = "";
let kata = [ 'saya', 'adalah', 'seorang', 'frontend', 'developer' ];

const membuatKalimat = (kata, kalimat) => {
    kalimat = `${kata.join(" ")}`;
    return kalimat;
}

console.log(membuatKalimat(kata, kalimat));

console.log('\n');








// // Jawaban Soal 3
console.log(`------ dibawah ini adalah jawaban Soal 3 ------`);

class Book {
    constructor(name, totalPage, price) {
        this.name = name;
        this.totalPage = totalPage;
        this.price = price;
    }
}

class Komik extends Book {
    constructor (name, totalPage, price, isColorful) {
        super(name, totalPage, price);
        this.isColorful = isColorful;
    }
}

let kalkulus = new Book ('Kalkulus Dasar', 535, 199000);
let conan = new Komik ('Vol.04 #01 - Jawaban Teka Teki', 430, 30000, false); 
let marvel = new Komik ('Empyre: Savage Avengers (2020) #1', 354, 45000, true);

console.log(kalkulus);
console.log(conan);
console.log(marvel);