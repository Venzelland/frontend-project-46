#!/usr/bin/env node

import commander from 'commander';

export const program = new commander.Command();

program
  .version('1.0.0')
  .description('Compares the two configuration files and shows the difference.')
  .option('-V, --version', 'display version number')
  .option('-h, --help', 'display information about the use of');

program.parse(process.argv);

if (program.help) {
  program.outputHelp();
  process.exit(0);
}
