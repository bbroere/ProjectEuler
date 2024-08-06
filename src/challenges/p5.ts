import {lcm} from "../utilities/numbers";
import {numbersWithMaxSize} from "../utilities/sequences";

// Average runtime ~0.003 ms
export function run(): number {
    const numbers: number[] = numbersWithMaxSize(20);
    return numbers.slice(1).reduce((c:number, n: number) => lcm(c, n), numbers[0]);
}
