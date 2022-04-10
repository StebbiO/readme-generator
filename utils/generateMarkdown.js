// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license === 'MIT') {
    licenseEl = 'https://img.shields.io/badge/License-MIT-green'
  } else if (data.license === 'GNU') {
    licenseEl = 'https://img.shields.io/badge/License-GNU-blue'
  } else if (data.license === 'Apache') {
    licenseEl = 'https://img.shields.io/badge/License-Apache-red'
  } else if (data.license === 'Mozilla') {
    licenseEl = 'https://img.shields.io/badge/License-Mozilla-yellow'
  } else if (data.license === 'ISC') {
    licenseEl = 'https://img.shields.io/badge/License-Mozilla-yellow'
  } else if (!data.license) {
    licenseEl = ''
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, licenseEl) {
  return `# ${data.title}

  ## License:
  [![license](${licenseEl})]

  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage Infomation](#usage)
  * [Contribute](#contribute)
  * [Testing](#testing)
  * [License](#license)
  
  ## Description

  ${data.description}

  ## Installation Process

  ${data.install}

  ## Usage Information

  ${data.usageInfo}

  ## Contribute

  ${data.contribution}

  ## Testing

  ${data.test}

  ## License

  ${data.license}

  ## Questions

  For any questions related to this project, please contact [${data.email}](${data.github}).
`;
}

module.exports = generateMarkdown;
