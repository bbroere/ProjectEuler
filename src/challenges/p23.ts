import {allDivisors} from "../utilities/factorization";
import {numbersWithMaxSize, sum} from "../utilities/sequences";

/**
 * <p>A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of $28$ would be $1 + 2 + 4 + 7 + 14 = 28$, which means that $28$ is a perfect number.</p>
 * <p>A number $n$ is called deficient if the sum of its proper divisors is less than $n$ and it is called abundant if this sum exceeds $n$.</p>
 * 
 * <p>As $12$ is the smallest abundant number, $1 + 2 + 3 + 4 + 6 = 16$, the smallest number that can be written as the sum of two abundant numbers is $24$. By mathematical analysis, it can be shown that all integers greater than $28123$ can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.</p>
 * <p>Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=23'>source</a></p>
 * <p><i><b>Average runtime ~200 ms</b></i></p>
 */
export function run(): number {
    const upperbound: number = 28123; // given by the problem
    const abundantNumbers: number[] = [];
    // Starting from 12 and stopping at upperbound, get all abundant numbers
    for (let i: number = 2; i <= upperbound; i++) {
        if (sum(allDivisors(i)) > 2*i) {
            abundantNumbers.push(i);
        }
    }
    // Now create a list of all the numbers we need to make sure we have all the integers that are not the sum of two or
    // more abundant numbers
    const numbers: number[] = [0, ...numbersWithMaxSize(upperbound)];
    // Now mark each number as 0 if it is a sum
    for (let i: number = 0; i < abundantNumbers.length; i++) {
        for (let j: number = i; j < abundantNumbers.length; j++) {
            numbers[abundantNumbers[i] + abundantNumbers[j]] = 0;
        }
    }
    return sum(numbers);
}
