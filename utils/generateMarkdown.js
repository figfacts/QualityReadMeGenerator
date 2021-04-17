// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

const licenseBadges = require("./licenseBadges");

// TODO: Create a function to generate markdown for README
function generateMarkdown(userInput) {
  return `
  
  # ${userInput.Title}
  ${licenseBadges(userInput)}
  
  ## Description
  ${userInput.Description}
  ***

  ## Table of Contents


  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Questions](#questions)
  

  ***

  ## Installation
  ${userInput.Installation}

  ## Usage
  ${userInput.Usage}

  ## License
  ${licenseBadges(userInput)}

  ## Contributing
  If you would like to contribute to this project, please [add me on GitHub](https://github.com/${userInput.Contributing}).
  
  ## Questions
  Please reach out to myself, ${userInput.Author}, at ${userInput.Questions}.

`;
}

module.exports = generateMarkdown;
