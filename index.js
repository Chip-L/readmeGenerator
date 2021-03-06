// packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user input
const questions = [
  {
    type: "input",
    message: "Please enter the project name (required): ",
    name: "title",
  },
  {
    type: "input",
    message:
      "Provide a short description explaining the what, why, and how of your project (required): ",
    name: "description",
  },
  {
    type: "list",
    message: "Which license would you like to use (recommended): ",
    choices: [
      "None",
      "MIT",
      "GNU GPLv3",
      "Unlicense",
      new inquirer.Separator(),
      "GNU AGPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "Boost Software License 1.0",
      new inquirer.Separator(),
    ],
    name: "license",
    default: "MIT",
    loop: false,
  },
  {
    type: "confirm",
    message: "Would you like a table of content (recommended)?",
    name: "toc",
    default: "y",
  },
  {
    type: "input",
    message:
      "What are the steps required to install your project (recommended): ",
    name: "installation",
  },
  {
    type: "input",
    message: "Describe the usage (recommended): ",
    name: "usage",
  },
  {
    type: "input",
    message: "List your collaborators (optional): ",
    name: "collaborators",
  },
  {
    type: "input",
    message: "Describe your features (optional): ",
    name: "features",
  },
  {
    type: "input",
    message: "Describe how to run the tests (optional): ",
    name: "tests",
  },
  {
    type: "input",
    message: "Tell how other people can contribute (optional): ",
    name: "contribution",
  },
  {
    type: "input",
    message: "What is your GitHub username (optional): ",
    name: "gitHub",
  },
  {
    type: "input",
    message: "What is your email address (optional): ",
    name: "email",
  },
];

// write README file
function writeToFile(fileName, data) {
  // always stores to local directory - regardless of where the function is called from
  fs.writeFile(path.join(process.cwd(), fileName), data, (err) =>
    err ? console.error(err) : console.log("\n\nFile created")
  );
}

// initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
