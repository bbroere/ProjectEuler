import {continuedFractionExpansion} from "../utilities/numbers";
import {numbersWithMaxSize, sum} from "../utilities/sequences";

// Average runtime ~0.013 ms
export function run(): number {
    const expansionArray: number[] = numbersWithMaxSize(99)
        .map(n => (n % 3 === 2 ? Math.floor(n / 3) * 2 + 2 : 1));
    return sum(continuedFractionExpansion(99, {base: 2, expansion: expansionArray}).numerator.toString()
        .split("").map(Number));
}
