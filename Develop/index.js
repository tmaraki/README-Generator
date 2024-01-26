// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// generateMarkdown

// TODO: Create an array of questions for user input

// const generateREADME = ({ project, Description, Installation, Usage, Contributing, Tests, License}) => {}


const questions = [
        {
            type: 'input',
            name: 'project',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a description of your project',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Write installation instructions',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Write usage information here'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What are the contribution guidelines?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What are the test instructions?'
        },
        {
            type: 'dropdown',
            name: 'license',
            message: 'Select a license',
            choices: []
        },
        {
            type: 'input',
            name: 'GitHub',
            message: 'Copy your GitHub profile link here'
        },
        {
            type: 'input',
            name: 'contact',
            message: 'Enter your email address'
        }
    ]
inquirer
    .prompt(questions)
    .then((data) => {
        const dataPageContent = generateREADME(data);

        fs.writeFile('README.md', dataPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
        );
    })
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
