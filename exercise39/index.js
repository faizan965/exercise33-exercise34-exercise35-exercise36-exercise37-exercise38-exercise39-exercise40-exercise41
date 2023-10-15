"use strict";
//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
function cityCountry(city, country) {
    return `${city}, ${country}`;
}
// Example usage:
const formattedString = cityCountry('New York', 'USA');
console.log(formattedString); // Output: New York, USA
