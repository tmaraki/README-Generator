// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// const generateMarkdown = async (data) => {
//     try {
//       // Read the Markdown template file
//       const template = await fs.promises.readFile('README.md', 'utf-8');
  
//       // Replace the placeholders in the template with the provided values
//       const markdownContent = template
//         .replace('{{project}}', data.project)
//         .replace('{{Description}}', data.description)
//         .replace('{{Installation}}', data.installation)
//         .replace('{{Usage}}', data.usage)
//         .replace('{{Contributing}}', data.contributing)
//         .replace('{{Tests}}', data.tests)
//         .replace('{{License}}', data.license);
  
//       // Return the generated Markdown content
//       return markdownContent;
//     } catch (error) {
//       console.error('Error reading or generating Markdown:', error);
//       return '';
//     }
//   };

  const generateMarkdown = ({ project, Description, Installation, Usage, Contributing, Tests, License, Contact, GitHub, Repo}) => {
    // Generate the Markdown content 
    const markdownContent = `
    # ${project}

    ## Description
        ${Description} 
        
    ## Table of Contents
    [Description](${Repo}/blob/main/README.md#description)
    
    [Installation](https://github.com/tmaraki/potential-enigma/blob/main/README.md#installation)
    
    [Usage](https://github.com/tmaraki/potential-enigma/blob/main/README.md#usage)
    
    [Contributing](https://github.com/tmaraki/potential-enigma/blob/main/README.md#contributing)
    
    [Tests](https://github.com/tmaraki/potential-enigma/blob/main/README.md#tests)
    
    [License](https://github.com/tmaraki/potential-enigma/blob/main/README.md#license)
    
    [Questions](https://github.com/tmaraki/potential-enigma/blob/main/README.md#questions)
        
        
    ## Installation 
        ${Installation}
        
        
    ## Usage
        ${Usage}
        
        
    ## Contributing
        ${Contributing}
        
        
    ## Tests
        ${Tests}
        
        
    ## License
        ${License}
        
        
    ## Questions
        For any questions, you can email me at ${Contact}
        
        ${GitHub}
    `;
  
    // Return the generated Markdown content
    return markdownContent;
  };


const questions = [
        {
            type: 'input',
            name: 'project',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Write a description of your project:',
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'What are the installation instructions?', 
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Write usage information here:'
        },
        {
            type: 'input',
            name: 'Contributing',
            message: 'What are the contribution guidelines?'
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'What are the test instructions?'
        },
        {
            type: 'checkbox',
            name: 'License',
            message: 'Select a license:',
            choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense']
        },
        {
            type: 'input',
            name: 'GitHub',
            message: 'Copy your GitHub profile link here:'
        },
        {
            type: 'input',
            name: 'Repo',
            message: 'Copy your project repo link here:'
        },
        {
            type: 'input',
            name: 'Contact',
            message: 'Enter your email address:'
        }
    ]
inquirer
    .prompt(questions)
    .then((questions) => {
        const dataPageContent = generateMarkdown(questions);

// function to write README file
function writeToFile(README, questions) {
    fs.writeFile(README, JSON.stringify(questions, null, '\t'), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Successfully created README.md!');
      }
    });
  }
        writeToFile('README.md', dataPageContent);
    })

  

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
