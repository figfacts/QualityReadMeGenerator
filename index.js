// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs"); //https://nodejs.dev/learn/the-nodejs-fs-module
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Author",
        message: "Enter the author's (your) name:",
      },
      {
        type: "input",
        name: "Title",
        message: "Enter a title for your README:",
      },
      {
        type: "input",
        name: "Description",
        message: "Enter a description for your README:",
      },
      {
        type: "input",
        name: "Installation",
        message: "Enter installation instructions:",
      },
      {
        type: "input",
        name: "Usage",
        message: "Enter usage instructions:",
      },
      {
        type: "list",
        name: "License",
        message: "Choose a license for your README: " ,
        choices: [
          "Mozilla Public License",
          "Apache",
          "MIT",
          "Boost Software License",
          "Unlicense",
        ],
      },
      {
        type: "input",
        name: "Contributing",
        message: "Enter your GitHub username:",
      },
      {
        type: "input",
        name: "Questions",
        message: "Enter your email address where you can be reached with questions:",
      },
    ];    


// TODO: Create a function to write README file --> See the next function init()
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((userInput) => {
    //   console.log(userInput);
      fs.writeFile("generateREADME.md", generateMarkdown(userInput), function (err) {
        if (err) throw err; //https://stackify.com/node-js-error-handling/
        console.log("New generated README file successfully written.");
      });
    })
    .catch((err) => {
      if (err) throw err;
    });
}

// Function call to initialize app
init();
