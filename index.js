const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    // project title
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your project (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You must enter a title for your project');
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('You must enter a GitHub username');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description for your project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You must provide a project description')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please describe how to install the project'
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'Please describe how this project is used',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please describe how users can contribute to this project',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Describe the process of testing this project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project',
        choices: ['MIT', 'GNU', 'Apache', 'Mozilla', 'ISC']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
