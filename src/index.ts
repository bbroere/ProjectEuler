import assert from "node:assert";
import {runChallenge} from "./run";

// validate problem number is passed
assert(process.argv.length == 3);
console.log(`Starting problem ${process.argv[2]}`);
const start: number = new Date().getTime();
runChallenge(Number(process.argv[2]));
const end: number = new Date().getTime();
console.log(`Ran problem ${process.argv[2]} in ${(end - start)} ms`);
