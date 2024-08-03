import {input} from "../inputs/p42";
import {alphabeticalValue} from "../utilities/strings";
import {triangleNumber} from "../utilities/numbers";
import {generateFirstN} from "../utilities/sequences";

// Average runtime ~0.32 ms
export function run(): number {
    const allAlphabeticalValues: number[] = input.map(alphabeticalValue).sort((a: number, b: number) => a - b);
    const neededTriangleNumbers: number[] = generateFirstN(allAlphabeticalValues[allAlphabeticalValues.length - 1], triangleNumber);
    return allAlphabeticalValues.filter((n: number) => neededTriangleNumbers.includes(n)).length;
}
