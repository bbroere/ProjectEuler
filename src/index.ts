import assert from "node:assert";
import {runChallenge} from "./run";

// validate problem number is passed
assert(process.argv.length == 3);
runChallenge(Number(process.argv[2]));