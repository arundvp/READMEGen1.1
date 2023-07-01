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
      type: 'list',
      name: 'license',
      message: 'Choose a license for your application:',
      choices: [
        'MIT',
        'Apache-2.0',
        'GPL-3.0',
        'BSD-3-Clause',
        'Unlicense',
      ],
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
    const licenseBadge = generateLicenseBadge(answers.license);

    const readmeTemplate = `
# ${answers.title}

${licenseBadge}

${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## Contributing

${answers.contributing}

## Tests

${answers.tests}

## License

This project is licensed under the ${answers.license}.

## Questions

If you have any questions or need further assistance, please feel free to reach out to me.

Contact Information:

- GitHub: [${answers.username}](https://github.com/${answers.username})
- Email: ${answers.email}
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

function generateLicenseBadge(license) {
  let badge = '';
  switch (license) {
    case 'MIT':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Apache-2.0':
      badge = '[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GPL-3.0':
      badge = '[![License: GPL-3.0](https://img.shields.io/badge/License-GPL%203.0-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'BSD-3-Clause':
      badge = '[![License: BSD-3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'Unlicense':
      badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
      break;
    default:
      badge = '';
  }
  return badge;
}
