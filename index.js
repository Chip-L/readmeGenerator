// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const makeMD = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
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
    message: "Which license would you like to use (optional): ",
    choices: [
      "",
      "MIT",
      "GNU GPLv3",
      "Unlicense",
      new inquirer.Separator(),
      "GNU AGPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "Boost Software License 1.0",
    ],
    name: "license",
    loop: false,
  },
  {
    type: "confirm",
    message: "Would you like a table of content?",
    name: "toc",
    default: "y",
  },
  {
    type: "input",
    message: "What are the steps required to install your project (optional): ",
    name: "installation",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // path-join method
  console.log(fileName, ":");
  console.log(data);

  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("file saved")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
