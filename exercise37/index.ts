//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function makeShirt(size = 'Large', message = 'I love TypeScript'): void {
    console.log(`You've ordered a ${size} shirt with the message: "${message}"`);
}

// Create a large shirt with the default message
makeShirt();

// Create a medium shirt with the default message
makeShirt('Medium');

// Create a small shirt with a custom message
makeShirt('Small', 'Custom message for a small shirt');