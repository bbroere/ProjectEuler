import assert from "node:assert";
import * as fs from 'fs';

// validate problem number is passed
assert(process.argv.length == 3);
const problem: string = process.argv[2];
// get code and execute, sneakily add run() to execution
const code: string = fs.readFileSync(`${__dirname}/challenges/p${problem}.js`, 'utf-8');
eval(code + "\n run()");