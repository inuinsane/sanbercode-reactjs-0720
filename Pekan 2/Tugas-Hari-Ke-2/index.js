// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]



// Soal 1
// Tulis code untuk memanggil function readBooks di sini
readBooks(10000, books[0], function(timeRemaining) {
    if (timeRemaining > 0) {
        readBooks(timeRemaining, books[1], function(timeRemaining) {
            if (timeRemaining > 0) {
                readBooks(timeRemaining, books[2], function(timeRemaining) {
                    if (timeRemaining > 0) {
                        readBooks(timeRemaining, books[3], function(timeRemaining){
                            console.log('Saya sudah membaca semua buku');
                        })
                    }
                })
            }
        })
    }
})
