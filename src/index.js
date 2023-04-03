#!/usr/bin/env node
const { Command } = require('commander');
const program = new Command();

program.version('0.1.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'display version number')
  .option('-h, --help', 'display information about the use of');
program.parse(process.argv);

if (program.help) {
  program.outputHelp();
  process.exit(0);
}

export default program
