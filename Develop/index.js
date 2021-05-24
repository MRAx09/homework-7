// TODO: Include packages needed for this application
const questions = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'input your name:'
    },
    {
        type: 'input',
        name: 'linkedIn',
        message: 'input your linkedIn URL:'
    },
    {
        type: 'input',
        name: 'bio',
        message: 'input your biography:'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
