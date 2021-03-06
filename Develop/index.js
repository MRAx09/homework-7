// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?:'
        },
        {
            type: 'input',
            name: 'project',
            message: 'What is the name of your project?:'
        },
        {
            type: 'input',
            name: 'info',
            message: 'Tell us about your project?:'
        },
    ]);
}
    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
  questions()
    .then((answers) => writeToFile('README.md', answers))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
