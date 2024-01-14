import {sumOfFactors} from "../utils";

export function run(): void {
    const abundantNumbers: number[] = [];
    // Starting from 12 and stopping at 28123, get all abundant numbers
    for (let i = 1; i <= 28123; i++) {
        if (sumOfFactors(i) > i) {
            abundantNumbers.push(i);
        }
    }
    // Now create a list of all the numbers we need to make sure we have all the integers that are not the sum of two or
    // more abundant numbers
    const numbers = [...Array(28123).keys()];
    // Now mark each number as 0 if it is a sum
    for (let i = 0; i < abundantNumbers.length; i++) {
        for (let j = i; j < abundantNumbers.length; j++) {
            numbers[abundantNumbers[i] + abundantNumbers[j]] = 0;
        }
    }
    console.log(numbers.reduce((c, n) => c + n, 0));
}