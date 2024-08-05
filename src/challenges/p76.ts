import {partitionNumber} from "../utilities/numbers";

// Average runtime ~0.01 ms
export function run(): number {
    return partitionNumber(100) - 1;
}
