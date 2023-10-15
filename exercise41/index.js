"use strict";
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Array of magician names
const magicianNames = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
// Call the function to show the magician names
showMagicians(magicianNames);
