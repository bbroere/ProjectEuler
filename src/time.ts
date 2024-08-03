import assert from "node:assert";
import {runChallenge} from "./run";

// validate problem number and number of repetitions are passed
assert(process.argv.length == 4);
console.log(`Timing problem ${process.argv[2]}, ${process.argv[3]} times`);
let cumulativeTimeMs: number = 0;
for (let i: number = 0; i < Number(process.argv[3]); i++) {
    const start: number = new Date().getTime();
    runChallenge(Number(process.argv[2]), true);
    const stop: number = new Date().getTime();
    cumulativeTimeMs += stop - start;
}
console.log(`Average time for problem ${process.argv[2]}: ${cumulativeTimeMs / parseInt(process.argv[3])} ms`);
