import {lcm} from "../utilities/numbers";
import {numbersWithMaxSize} from "../utilities/sequences";

// Average runtime ~25 ms
export function run(): number {
    return lcm(...numbersWithMaxSize(20));
}
