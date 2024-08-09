import {forAll, numbersWithMaxSize} from "../utilities/sequences";

/**
 * <p>It can be seen that the number, $125874$, and its double, $251748$, contain exactly the same digits, but in a different order.</p>
 * <p>Find the smallest positive integer, $x$, such that $2x$, $3x$, $4x$, $5x$, and $6x$, contain the same digits.</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=52'>source</a></p>
 * <p><i><b>Average runtime ~50 ms</b></i></p>
 */
export function run(): number {
    const maxMultiplier: number = 6;
    let base: number = 10;

    function sameDigits(a: number, b: number): boolean {
        return a.toString().split("").sort().join("") === b.toString().split("").sort().join("");
    }

    let result: number | undefined = undefined;
    const maxMultiplierArray: number[] = numbersWithMaxSize(maxMultiplier);
    do {
        for (let i: number = base; i < base * 10 / maxMultiplier; i++) {
            if (
                forAll(maxMultiplierArray.map((n: number) => i * n), (n: number) => sameDigits(i, n))
            ) {
                result = i;
                break;
            }
        }
        base *= 10;
    } while (!result);

    return result;
}
