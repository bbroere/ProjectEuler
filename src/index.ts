import assert from "node:assert";
import {runChallenge} from "./run";

// validate problem number is passed
assert(process.argv.length == 3);
const start = new Date().getTime();
console.log(`Starting problem ${process.argv[2]}`);
runChallenge(Number(process.argv[2]));
console.log(`Ran problem ${process.argv[2]} in ${(new Date().getTime() - start) / 1000} seconds`);