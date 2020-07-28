var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise
function read() {
    readBooksPromise(10000, books[0])
    .then(function(timeRemaining){
        console.log(timeRemaining);
        readBooksPromise(timeRemaining, books[1])
        .then(function(timeRemaining){
            console.log(timeRemaining);
            readBooksPromise(timeRemaining, books[2])
            .then(function(timeRemaining){
                console.log(timeRemaining);
            })
            .catch(function(timeOut) {
                console.log('Tolong tambah lagi waktunya');
            });
        })
        .catch(function(timeOut) {
            console.log('Tolong tambah lagi waktunya');
        });
    })
    .catch(function(timeOut) {
        console.log('Tolong tambah lagi waktunya');
    })
}

read();