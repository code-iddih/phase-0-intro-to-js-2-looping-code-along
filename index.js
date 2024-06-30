// Code your solutions in this file

// Assignment 1


function writeCards(names, event) {

    let messages = [];  // Creating an empty array

    for (let i = 0; i < names.length; i++) { // For loop

        let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!` // The message

        messages.push(message); // Inserting every message to the empty array untill the iteration is over
    }

    return messages;

}

console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "birthday")); // Testing

//Assignment 2

function countDown(startingInteger)  {

    let currentInteger = startingInteger; // Setting the inserted integer to be the start count

    while (currentInteger >= 0) { // While loop
        console.log(currentInteger);
        currentInteger --;
    }

}

countDown(10); // Testing