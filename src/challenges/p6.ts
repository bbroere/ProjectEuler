/**
 * <p>The sum of the squares of the first ten natural numbers is,</p>
 * $$1^2 + 2^2 + ... + 10^2 = 385.$$
 * <p>The square of the sum of the first ten natural numbers is,</p>
 * $$(1 + 2 + ... + 10)^2 = 55^2 = 3025.$$
 * <p>Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is $3025 - 385 = 2640$.</p>
 * <p>Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=6'>source</a></p>
 * <p><i><b>Average runtime ~0.00017 ms</b></i></p>
 */
export function run(): number {
    let sum: number = 0;
    let sumSquares: number = 0;
    for (let i: number = 1; i < 101; i++) {
        sum += i;
        sumSquares += i ** 2;
    }
    return sum ** 2 - sumSquares;
}
