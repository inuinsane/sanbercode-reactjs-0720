// Soal 1
console.log(`------ dibawah ini adalah jawaban soal 1 ------`);
const newFunction = (firstName, lastName) => {
    return {
        firstName,
        lastName,
        fullName: () => {
            console.log(`${firstName} ${lastName}`);
        },
    }
}
newFunction('Ahmad', 'Albar').fullName();
console.log('\n');





// Soal 2
console.log(`------ dibawah ini adalah jawaban soal 2 ------`);
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}
const {firstName, lastName, destination, occupation, spell} = newObject;
console.log(firstName, lastName, destination, occupation, spell);


console.log('\n');



// Soal 3
console.log(`------ dibawah ini adalah jawaban soal 3 ------`);
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];

const combined = [...west, ...east];
console.log(combined);

console.log('\n');