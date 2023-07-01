const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your project:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a brief description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter the installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter the usage information:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter the contributing guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter the test instructions:',
    },
    {
      type: 'input',
      name: 'license',
      message: 'Enter the project license:',
    },
    {
      type: 'input',
      name: 'username',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ])
  .then((answers) => {
    const readmeTemplate = `
# ${answers.title}

## Description

${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## License

This project is licensed under the ${answers.license}.

## Contributing

${answers.contributing}

## Tests

${answers.tests}

## Questions

If you have any questions, please feel free to reach out to me:

GitHub: [${answers.username}](https://github.com/${answers.username})

Email: ${answers.email}
`;

    fs.writeFile('README.md', readmeTemplate, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README.md file has been successfully generated!');
      }
    });
  })
  .catch((error) => {
    console.error(error);
  });
