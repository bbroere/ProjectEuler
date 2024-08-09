import {numbersWithMaxSize} from "../utilities/sequences";
import {lcm} from "../utilities/numbers";

/**
 * <p>$2520$ is the smallest number that can be divided by each of the numbers from $1$ to $10$ without any remainder.</p>
 * <p>What is the smallest positive number that is <strong class="tooltip">evenly divisible<span class="tooltiptext">divisible with no remainder</span></strong> by all of the numbers from $1$ to $20$?</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=5'>source</a></p>
 * <p><i><b>Average runtime ~0.003 ms</b></i></p>
 */
export function run(): number {
    const numbers: number[] = numbersWithMaxSize(20);
    return numbers.slice(1).reduce((c:number, n: number) => lcm(c, n), numbers[0]);
}
