// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkDown = require('./utils/generateMarkDown')
console.log("Welcome to my README generator"); // logging the imported function

// questions for md file
const questions = [
        {
            type: 'input',
            name: 'project',
            message: 'What is the name of your project?',
            validate: your_Input => {
                if (your_Input) {
                    return true;
                } else {
                    console.log('Enter a title to continue!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a description of your project:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do users install your project?', 
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this project?'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How can users contribute to this project?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'How do users test the project?'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Select a license:',
            choices: ['None', 'Apache 2.0', 'BSD 2', 'Boost Software License 1.0', 'CC0 1.0', 'Eclipse Public License 1.0', 'GNU AGPL v3.0', 'GNU LGPL v3', 'GNU GPL v3.0', 'MIT', 'Mozilla Public License 2.0', 'The Unlicense']
        },
        {
            type: 'input',
            name: 'GitHub',
            message: 'Copy your GitHub profile link here:',
            validate: GitHub_input => {
                if (GitHub_input) {
                    return true;
                } else {
                    console.log('Enter a link to your GitHub profile to continue!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contact',
            message: 'Enter your email address:',
            validate: contact_input => {
                if (contact_input) {
                    return true;
                } else {
                    console.log('Enter an email address to continue!');
                    return false;
                }
            }
        }
    ];


console.log(generateMarkDown);

// function to create file

function writeToFile(fileName, userInput) {
    fs.writeFile(fileName, userInput, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Successfully created README.md!');
      }
    });
  };


// initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkDown(userInput));
    });
};

// calling init 
init();