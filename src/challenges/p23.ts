import {properDivisors} from "../utilities/primes";
import {sumWithCondition} from "../utilities/sequences";

export function run(): number {
    const upperbound: number = 28123; // given by the problem
    const abundantNumbers: number[] = [];
    // Starting from 12 and stopping at upperbound, get all abundant numbers
    for (let i: number = 2; i <= upperbound; i++) {
        if (sumWithCondition(properDivisors(i)) > i) {
            abundantNumbers.push(i);
        }
    }
    // Now create a list of all the numbers we need to make sure we have all the integers that are not the sum of two or
    // more abundant numbers
    const numbers: number[] = [...Array(upperbound).keys()];
    // Now mark each number as 0 if it is a sum
    for (let i: number = 0; i < abundantNumbers.length; i++) {
        for (let j: number = i; j < abundantNumbers.length; j++) {
            numbers[abundantNumbers[i] + abundantNumbers[j]] = 0;
        }
    }
    return sumWithCondition(numbers);
}