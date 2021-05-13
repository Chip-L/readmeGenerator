// Return a license badge based on which license is passed in (If there is no license, return an empty string)
function renderLicenseBadge(license) {
  return license;
}

// Returns the license link
function renderLicenseLink(license) {
  return license ? `*[License](#license)` : "";
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

This project is licensed under the terms of the ${license} license. For more information please, refer to [https://choosealicense.com/](https://choosealicense.com/${licenseLoc}/).
`;
}

function renderToC(data) {
  if (!data.toc) {
    return "";
  }
  text = `
## Table of Contents

${renderInstallLink(data.installation)}${renderUsageLink(data.usage)}
${renderLicenseLink(data.license)}`;

  return text;
}

function renderInstallLink(install) {
  return install ? `*[Installation](#installation)` : "";
}

function renderInstallSection(install) {
  if (!install || install === "") {
    return "";
  }

  text = `

##Installation

${install}`;
  return text;
}

function renderUsageLink(usage) {
  return usage ? `*[Usage](#usage)` : "";
}

function renderUsageSection(usage) {
  if (!usage || usage === "") {
    return "";
  }

  text = `

##Usage

${usage}`;
  return text;
}

// Generate the markdown for README (each render function displays its own lines)
function generateMarkdown(data) {
  console.log(data);

  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description

${data.description}
${renderToC(data)}${renderInstallSection(
    data.installation
  )}${renderUsageSection(data.usage)}

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
