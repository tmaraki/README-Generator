// function to render badge 
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } return "";
}

// function to generate the MD file

function generateMarkDown(data) {
  return `# ${data.project}

${renderLicenseBadge(data.license)}

## Table of Contents
  [Description](#description)

  [Installation](#installation)

  [Usage](#usage)

  [Contributing](#contributing)

  [Tests](#tests)

  [License](#license)

  [Questions](#questions)


## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
This project is licensed under ${data.license};

## Questions
- For any questions, you can email me at ${data.contact}
- Here is a link to my GitHub: ${data.GitHub}`;
}

module.exports = generateMarkDown;