#!/usr/bin/env node

import { cwd } from 'node:process';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import _ from 'lodash';

const getfilePath = (filePath) => resolve(cwd(), '__fixtures__', filepath);

const readFile = (path) => readFileSync(path, 'utf-8');

const parsesFile = (file) => JSON.parse(file);

	const informationDiff = getDiffInformation(
		parsesFile(readFile(getfilepath(filepath1))),
		parsesFile(readFile(getfilepath(filepath2))),
	  );
  console.log(informationDiff);
  
    switch (typeDiff) {
      case 'delited':
        return `- ${diff.key}: ${diff.value}`;
      case 'unchanges':
        return `  ${diff.key}: ${diff.value}`;
      case 'changet':
        return `- ${diff.key}: ${diff.value1} \n +${diff.key}: ${diff.value2}`;
      case 'added':
        return `+ ${diff.key}: ${diff.value1}`;
    }
  });
  console.log(result);

  return `{\n${result.join('\n')}\n}`;
};

gendiff('../__fixtures__/file1.json', '../__fixtures__/file2.json');

export default gendiff;
