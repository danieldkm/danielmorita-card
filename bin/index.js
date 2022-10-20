#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const boxen = require('boxen');
const chalk = require('chalk');
// import boxen from "boxen";
// import chalk from "chalk";

// Because we like console, and captains.log sounds cool
const captains = console;

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'single',
};

// Text + chalk definitions
const data = {
  name: chalk.white('Daniel Keyti Morita /'),
  handle: chalk.cyan('Dev'),
  work: chalk.white('Desenvolvedor Full Stack'),
  twitter: chalk.cyan('https://twitter.com/danielkmorita'),
  github: chalk.cyan('https://github.com/danieldkm'),
  linkedin: chalk.cyan('https://linkedin.com/in/daniel-k-morita-7b928831'),
  npx: chalk.white('npx @danielmorita/card'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelCard: chalk.white.bold('      Card:'),
};

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name} ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output = heading
  + newline
  + newline
  + working
  + newline
  + twittering
  + newline
  + githubing
  + newline
  + linkedining
  + newline
  + newline
  + newline
  + carding;

const cardMessage = chalk.green(boxen(output, options));
captains.log(cardMessage);
