const volumeKubus = (sisi) => {
    if (sisi) {
        let result = (sisi*sisi*sisi).toFixed(2);
        return `Volume kubus dengan sisi ${sisi} adalah ${result}`;
    } else {
        return `Panjang sisi belum dimasukkan `;
    }
}
console.log(volumeKubus(3));


const volumeBalok = (panjang, lebar, tinggi) => {
    if (panjang && lebar && tinggi) {
        let result = (panjang*lebar*tinggi).toFixed(2);
        return `Volume balok dengan panjang: ${panjang}  , lebar: ${lebar}  , dan tinggi: ${tinggi}  , adalah sebesar ${result}`;
    }
    else {
        return `Parameter perhitungan volume balok tidak lengkap`;
    }
}


console.log(volumeBalok(30, 10, 10));