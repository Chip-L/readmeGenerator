// Return a license badge based on which license is passed in (If there is no license, return an empty string)
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }

  return `![${license}](https://img.shields.io/badge/LICENSE-${license.replace(
    / /g,
    "%20"
  )}-blue)`;
}

// Returns the license link
function renderLicenseLink(license) {
  return license ? `- [License](#license)\n` : "";
}

// Return the license section of README (If there is no license, return an empty string)
function renderLicenseSection(license) {
  let licenseLoc;
  let licenseLocations = [
    ["MIT", "mit"],
    ["GNU GPLv3", "gpl-3.0"],
    ["The Unlicense", "unlicense"],
    ["GNU AGPLv3", "agpl-3.0"],
    ["GNU LGPLv3", "lgpl-3.0"],
    ["Mozilla Public License 2.0", "mpl-2.0"],
    ["Apache License 2.0", "apache-2.0"],
    ["Boost Software License 1.0", "bsl-1.0"],
  ];

  if (!license || license === "") {
    return "";
  }

  for (let elem of licenseLocations) {
    if (elem[0] === license) {
      licenseLoc = elem[1];
      break;
    }
  }

  return `

## License

This project is licensed under the terms of the ${license} license. For more information please, refer to [https://choosealicense.com/](https://choosealicense.com/${licenseLoc}/).`;
}

function renderToC(data) {
  if (!data.toc) {
    return "";
  }
  text = `
## Table of Contents

${renderInstallLink(data.installation)}${renderUsageLink(
    data.usage
  )}${renderCollaboratorLink(data.collaborators)}${renderLicenseLink(
    data.license
  )}${renderFeatureLink(data.features)}${renderTestLink(
    data.tests
  )}${renderHowToContributeLink(data.contribution)}${renderQuestionsLink(
    data.gitHub,
    data.email
  )}`;

  return text;
}

function renderInstallLink(install) {
  return install ? `- [Installation](#installation)\n` : "";
}

function renderInstallSection(install) {
  if (!install || install === "") {
    return "";
  }

  text = `

## Installation

${install}`;
  return text;
}

function renderUsageLink(usage) {
  return usage ? `- [Usage](#usage)\n` : "";
}

function renderUsageSection(usage) {
  if (!usage || usage === "") {
    return "";
  }

  text = `

## Usage

${usage}`;
  return text;
}

function renderCollaboratorLink(collaborators) {
  return collaborators ? `- [Collaborators](#collaborators)\n` : "";
}

function renderCollaboratorSection(collaborators) {
  if (!collaborators || collaborators === "") {
    return "";
  }

  text = `

## Collaborators

${collaborators}`;
  return text;
}

function renderFeatureLink(features) {
  return features ? `- [Features](#features)\n` : "";
}

function renderFeatureSection(features) {
  if (!features || features === "") {
    return "";
  }

  text = `

## Features

${features}`;
  return text;
}

function renderTestLink(tests) {
  return tests ? `- [Tests](#tests)\n` : "";
}

function renderTestSection(tests) {
  if (!tests || tests === "") {
    return "";
  }

  text = `

## Tests

${tests}`;
  return text;
}

function renderHowToContributeLink(contribution) {
  return contribution ? `- [How to Contribute](#how-to-contribute)\n` : "";
}

function renderHowToContributeSection(contribution) {
  if (!contribution || contribution === "") {
    return "";
  }

  text = `

## How to Contribute

${contribution}`;
  return text;
}

function renderQuestionsLink(gitHub, email) {
  return gitHub || email ? `- [Questions](#questions)\n` : "";
}

function renderQuestionsSection(gitHub, email) {
  let gitHubText = "";
  let emailText = "";

  if ((!gitHub || gitHub === "") && (!email || email === "")) {
    return "";
  }
  if (gitHub) {
    gitHubText = `GitHub at [${gitHub}](https://github.com/${gitHub}/)`;
    if (email) {
      emailText = ` or by ${email}`;
    }
  } else {
    emailText = `${email}`;
  }

  text = `

## Questions

If you have further questions, please contact me via ${gitHubText}${emailText}`;
  return text;
}

// Generate the markdown for README (each render function displays its own lines)
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description

${data.description}
${renderToC(data)}${renderInstallSection(
    data.installation
  )}${renderUsageSection(data.usage)}${renderCollaboratorSection(
    data.collaborators
  )}${renderLicenseSection(data.license)}${renderFeatureSection(
    data.features
  )}${renderTestSection(data.tests)}${renderHowToContributeSection(
    data.contribution
  )}${renderQuestionsSection(data.gitHub, data.email)}
`;
}

module.exports = generateMarkdown;
