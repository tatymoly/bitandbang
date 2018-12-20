#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
var chalk = require('chalk');
var boxen = require('boxen');

// Define options for Boxen
let options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
};
// Text + chalk definitions
let data = {
  name: chalk.hex('#45e7fa')('Tatiana Molina ~'),
  handle: chalk.hex('#fa5845')('tatymolys'),
  description: chalk.hex('#fab345')('I dont like avocado toast 🥑 🚫 🍞'),
  work: chalk.hex('#45e7fa')('Web Engineer at Deloitte'),
  twitter: chalk.hex('#fa5845')('https://twitter.com/tatymolys'),
  github: chalk.hex('#fa5845')('https://github.com/tatymoly'),
  linkedin: chalk.hex('#fa5845')('https://www.linkedin.com/in/tatymoly/'),
  web: chalk.hex('#fa5845')('https://tatymoly.me/'),
  medium: chalk.hex('#fa5845')('https://medium.com/@tatymolys'),
  npx: chalk.white('npx tatymolys'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelMedium: chalk.white.bold('    Medium:'),
  labelCard: chalk.white.bold('      Card:'),
};

// Actual strings we're going to output
var newline = '\n';
var heading = `${data.name} ${data.handle}`;
var description = `${data.description}`;
var working = `${data.labelWork}  ${data.work}`;
var twittering = `${data.labelTwitter}  ${data.twitter}`;
var githubing = `${data.labelGitHub}  ${data.github}`;
var linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
var webing = `${data.labelWeb}  ${data.web}`;
var medium = `${data.labelMedium}  ${data.medium}`;
var carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
let output =
  heading +
  newline +
  newline +
  description +
  newline +
  newline +
  working +
  newline +
  twittering +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  medium +
  newline +
  webing +
  newline +
  newline +
  carding;

console.log(chalk.hex('#45e7fa')(boxen(output, options)));
