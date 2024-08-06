import assert from "node:assert";
import {runAll, runChallenge} from "./run";

// Validate problem number or 'all' is passed
assert(process.argv.length == 3);
if(process.argv[2].toLowerCase() == "all") {
    console.log("Running all problems");
    runAll();
} else {
    console.log(`Starting problem ${process.argv[2]}`);
    const start: number = new Date().getTime();
    runChallenge(Number(process.argv[2]));
    const end: number = new Date().getTime();
    console.log(`Ran problem ${process.argv[2]} in ${(end - start)} ms`);
}
