// Jawaban Soal 1
console.log(`------ dibawah ini jawaban Soal 1 ------`);

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992];
let personObj = {
    nama: "Asep",
    jenisKelamin: "laki-laki",
    hobi: "baca buku",
    tahunLahir: 1992,
};

console.log(personObj);
console.log('\n');









// Jawaban Soal 2
console.log(`------ dibawah ini jawaban Soal 2 ------`);
let fruits = [
    {
        nama: 'strawberry',
        warna: 'merah',
        adaBijinya: 'tidak',
        harga: 9000
    },
    {
        nama: 'jeruk',
        warna: 'oranye',
        adaBijinya: 'ada',
        harga: 8000
    },
    {
        nama: 'Semangka',
        warna: 'Hijau & Merah',
        adaBijinya: 'ada',
        harga: 10000
    },
    {
        nama: 'Pisang',
        warna: 'Kuning',
        adaBijinya: 'tidak',
        harga: 5000
    }
]

console.log(fruits[0]);
console.log('\n');











// Jawaban Soal 3
console.log(`------ dibawah ini jawaban Soal 3 ------`);
var dataFilm = [];

function tambahDetail(nama, durasi, genre, tahun) {
    let detail = {
        nama: nama,
        durasi: durasi,
        genre: genre,
        tahun: tahun
    };
    return dataFilm.push(detail);
}
(tambahDetail('James Bond', '150', 'Action', 1997));
(tambahDetail('Cinderella', '120', 'Drama', 2000));
console.log(dataFilm);
console.log('\n');









// Jawaban Soal 4
console.log(`------ dibawah ini jawaban Soal 4 ------`);

class Animal {
    // Code class di sini
    constructor(name) {
        this.band = 4;
        this.cold_blooded = false;
        this.legs = 4;
        this.name = name;
    }
    get animalName() {
        return this.name
    }
}

// Release 0
var sheep = new Animal("shaun");

console.log(sheep.animalName); // mengakses property menggunakan getter
// console.log(sheep.name) // "shaun"

console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

// Release 1
// Code class Ape dan class Frog di sini
class Ape extends Animal {
    constructor(name) {
        super(name);
        this.legs = 2;
    }
    yell() {
        return console.log(`"Auooo"`);
    }

    get jumlahKaki() {
        return `${this.name} memiliki ${this.legs} kaki`;
    }
}
class Frog extends Animal {
    constructor(name) {
        super(name);
    }
    jump() {
        return console.log(`"hop hop"`);
    }
    get jumlahKaki() {
        return `${this.name} memiliki ${this.legs} kaki`;
    }
}
var sungokong = new Ape("kera sakti")
sungokong.yell()
console.log(sungokong.jumlahKaki);

var kodok = new Frog("buduk")
kodok.jump()
console.log(kodok.jumlahKaki);











// Jawaban Soal 5
console.log(`------ dibawah ini jawaban Soal 5 ------`);
class Clock {
    constructor({ template }) {
        //         this.template = template;
        var timer;

        function render() {
            var date = new Date();

            var hours = date.getHours();
            if (hours < 10) hours = '0' + hours;

            var mins = date.getMinutes();
            if (mins < 10) mins = '0' + mins;

            var secs = date.getSeconds();
            if (secs < 10) secs = '0' + secs;

            var output = template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s', secs);

            console.log(output);
        }

        this.stop = function () {
            clearInterval(timer);
        };

        this.start = function () {
            render();
            timer = setInterval(render, 1000);
        };
    }
}
var clock = new Clock({ template: 'h:m:s' });
clock.start();


















// Ini jawaban soal 5 yang lain tapi error belum tau kenapa error di method start
// ketika ada interval, namun ketika render sekali jalan tidak muncul error

// class Clock {
//     constructor({ template }) {
//         this.template = template;
//     }

//     render() {
//         let date = new Date();
//         let hours = date.getHours();
//         if (hours < 10) {
//             hours = '0' + hours;
//         }

//         let mins = date.getMinutes();
//         if (mins < 10) {
//             mins = '0' + mins;
//         }

//         let secs = date.getSeconds();
//         if (secs < 10) {
//             secs = '0' + secs;
//         }

//         let output = this.template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);

//         return output;
//     }

//     start() {
//         this.render();
//         let timer = setInterval(this.render(), 1000);
//     }
// }

// let clock = new Clock({ template: 'h:m:s'});
// console.log(clock.render());   // ini tidak error
// console.log(clock.start());  // ini error ,  kenapa ya ...


