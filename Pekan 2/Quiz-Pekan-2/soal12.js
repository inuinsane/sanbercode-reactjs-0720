class BangunDatar {
    constructor (nama) {
        this.nama = nama;
    }
    keliling() {
        return "";
    }
    luas() {
        return "";
    }
}

class Lingkaran extends BangunDatar{
    constructor(nama) {
        super(nama);
    }
    get keliling() {
        return this.keliling;
    }
    get luas() {
        return this.luas;
    }
    set keliling(r) {
        return (Math.PI*2*r).toFixed(2);
    }
    set luas(r) {
        return (Math.PI*r*r).toFixed(2);
    }
    keliling(r) {
        return (Math.PI*2*r).toFixed(2);
    }
    luas(r) {
        return (Math.PI*r*r).toFixed(2);
    }
}

let lingkaran = new Lingkaran("lingkaran");
console.log(lingkaran);

console.log(`Luas ${lingkaran.nama} = ${lingkaran.luas(10)}`);
console.log(`Keliling ${lingkaran.nama} = ${lingkaran.keliling(10)}`);


class Persegi extends BangunDatar{
    constructor(nama) {
        super(nama);
    }
    get keliling() {
        return this.keliling;
    }
    get luas() {
        return this.luas;
    }
    set keliling(sisi) {
        return (sisi*4).toFixed(2);
    }
    set luas(sisi) {
        return (sisi*sisi).toFixed(2);
    }
    keliling(sisi) {
        return (sisi*4).toFixed(2);
    }
    luas(sisi) {
        return (sisi*sisi).toFixed(2);
    }
}

let persegi = new Persegi("persegi");
console.log(persegi);
console.log(`Luas ${persegi.nama} = ${persegi.luas(10)}`);
console.log(`Keliling ${persegi.nama} = ${persegi.keliling(10)}`);