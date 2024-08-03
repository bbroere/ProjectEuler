import {numbersWithMaxSize, sum} from "../utilities/sequences";

// Average runtime ~0.04 ms
export function run(): number {
    return sum(numbersWithMaxSize(999), (i: number) => i % 3 == 0 || i % 5 == 0);
}
