// Your code goes here
// index.js

// Define a function to change the text content of the <p> element
function changeText() {
    const pElement = document.querySelector('p');
    pElement.textContent = 'This is really cool!';
}

// Add an event listener for the 'DOMContentLoaded' event
document.addEventListener('DOMContentLoaded', changeText);
