import {input} from "../inputs/p13";
import {sum} from "../utilities/sequences";

// Average runtime ~0.01 ms
export function run(): number {
    return parseInt(sum(input.split("\n").map(BigInt)).toString().slice(0, 10));
}
