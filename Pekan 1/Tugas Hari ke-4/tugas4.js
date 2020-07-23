// Jawaban Soal 1
console.log(`\n------ dibawah ini adalah jawaban soal pertama ------`);

let index = 1;
console.log('Looping Pertama');
while(index<=20) {
    if(index%2 == 0) {
        console.log(`${index} - I love coding`);
    }
    index++;
}
console.log('Looping Kedua');
while(index>=2) {
    if(index%2 == 0) {
        console.log(`${index} - I will become a frontend developer`);
    }
    index--;
}





// Jawaban Soal 2
console.log(`\n -------- dibawah ini adalah jawaban soal kedua -------`);

let nilai = 1;
for (nilai=1; nilai<=20; nilai++) {
    if (nilai % 2 != 0) {
        if(nilai%3 == 0) {
            console.log(`${nilai} - I love coding`);
        } else {
            console.log(`${nilai} - Santai`);
            
        }
    } else {
        console.log(`${nilai} - Berkualitas`);
        
    }
}





// Jawaban Soal 3
console.log(`\n -------- dibawah ini adalah adalah jawaban soal ketiga -------`);
let baris;
let batas = 7;
let empty ='';

for (baris = 1; baris <= batas; baris++) {
    empty += '#';
    console.log(empty);
}





// Jawaban Soal 4
console.log(`\n -------- dibawah ini adalah jawaban soal keempat -------`);
var kalimat="saya sangat senang belajar javascript";
var res = kalimat.split(" ");
console.log(res);








// Jawaban Soal 5
console.log(`\n -------- dibawah ini adalah jawaban soal kelima -------`);
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
console.log(daftarBuah.sort());


console.log(`\n \n \n------ Alhamdulillah ------\n \n \n`);
