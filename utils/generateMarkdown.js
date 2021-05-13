// Return a license badge based on which license is passed in (If there is no license, return an empty string)
function renderLicenseBadge(license) {}

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

// Generate the markdown for README (each render function displays its own lines)
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge}
  ## Description
  
  ${data.description}
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
