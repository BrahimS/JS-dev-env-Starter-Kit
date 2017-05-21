// Generate Data Mock

import faker from 'json-schema-faker';
import { schema } from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

const json = JSON.stringify(faker(schema));
 /* eslint-disable no-console */
fs.writeFile('./src/api/db.json', json , function(error) {
  if(error) {
    return console.log(chalk.red(error));
  } else {
    console.log(chalk.green('it works'));
  }
});

