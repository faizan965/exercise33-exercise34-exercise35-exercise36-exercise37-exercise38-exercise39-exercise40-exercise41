"use strict";
//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
const animals = ['dog', 'cat', 'rabbit'];
// Print the names of the animals
console.log('Names of the animals:');
for (const animal of animals) {
    console.log(animal);
}
// Print statements about each animal
console.log('\nStatements about the animals:');
for (const animal of animals) {
    switch (animal) {
        case 'dog':
            console.log(`A ${animal} would make a great pet.`);
            break;
        case 'cat':
            console.log(`A ${animal} can be an independent companion.`);
            break;
        case 'rabbit':
            console.log(`A ${animal} is a cute and gentle friend.`);
            break;
    }
}
// Print what these animals have in common
console.log('\nAny of these animals would make a great pet!');
