#!/usr/bin/env node

const chalk = require('chalk');
const log = console.log;

const bio = `
  Rajesh Pillai 
  --------------
  Coder and author, including many udemy and youtube courses.  Founder of a Tech Startup,
  Algorisys Technologies, community learning platform teachyourselfcoding.com (a beta 
  version).

  20+ Years experience in the IT industry, software architect,mentor a trainer at heart.
`;

const social = `
  https://twitter.com/rajeshpillai
  https://github.com/rajeshpillai
  https://teachyourselfcoding.com
`;

log(bio);
log(chalk.green(social));
