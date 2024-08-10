import assert from "node:assert";
import {allDivisors} from "./factorization";
import {numbersWithMaxSize, sum} from "./sequences";
import {lexicographicPermutations} from "./strings";

/**
 * Calculates LCM of a list of arguments
 */
export function lcm(a: number, b: number): number;
export function lcm(a: bigint, b: bigint): bigint;
export function lcm(a: number | bigint, b: number | bigint): number | bigint {
    switch (typeof a) {
        case 'number':
            const _numLCM = (a: number, b: number): number => a * b / gcd(a, b);
            return _numLCM(a as number, b as number);
        case 'bigint':
            const _bigLCM = (a: bigint, b: bigint): bigint => a * b / gcd(a, b);
            return _bigLCM(a as bigint, b as bigint);
    }
}

/**
 * Returns the GCD of a list of arguments, based on the GCD formula
 */
export function gcd(a: number, b: number): number;
export function gcd(a: bigint, b: bigint): bigint;
export function gcd(a: number | bigint, b: number | bigint): number | bigint {
    switch (typeof a) {
        case 'number':
            const _numGCD = (a: number, b: number): number => b > a ? _numGCD(b, a) : !b ? a : _numGCD(b, a % b);
            return _numGCD(a as number, b as number);
        case 'bigint':
            const _bigGCD = (a: bigint, b: bigint): bigint => b > a ? _bigGCD(b, a) : !b ? a : _bigGCD(b, a % b);
            return _bigGCD(a as bigint, b as bigint);
    }
}

/**
 * Collatz sequence formula
 */
export function collatz(n: number): number {
    if (n % 2 == 0) {
        return n / 2;
    }
    return 3 * n + 1;
}

/**
 * Calculates the factorial of a number as a bigint
 * Note that this returns (correctly!) 1 for 0! and 1 for 1!
 */
export function factorial(n: number): bigint {
    let res: bigint = 1n;
    for (let i: number = 2; i <= n; i++) {
        res *= BigInt(i);
    }
    return res;
}

/**
 * Calculates the binomial coefficient of 2 numbers as a bigint
 */
export function binomialCoefficient(above: number, below: number): bigint {
    assert(above > below, 'binomialCoefficient');
    return factorial(above) / (factorial(below) * factorial(above - below));
}

/**
 * Given a number n this function checks if the number is amicable, and if so returns its mate
 * If not it returns -1 (for speed not undefined)
 */
export function amicableMate(n: number): number {
    assert(n > 1, 'amicableMate');
    const d: number = sum(allDivisors(n)) - n;
    if (d > 1) {
        const dp: number = sum(allDivisors(d)) - d;
        if (dp == n) {
            return d;
        }
    }
    return -1;
}

/**
 * Checks if a number is a pandigital
 */
export function isPandigital(n: number): boolean;
export function isPandigital(n: string): boolean;
export function isPandigital(n: number | string): boolean {
    const digits: string[] = String(n).split("");
    if (digits.length > 9)
        return false;
    return numbersWithMaxSize(digits.length).reduce((acc: boolean, val: number) => acc && digits.includes(val.toString()), true);
}

/**
 * Generates all pandigital numbers of a given length
 * @param n the number of digits
 * @param includeZero whether to include zero in the pandigital numbers
 */
export function generateAllPandigitals(n: number, includeZero: boolean = false): number[] {
    const digits: number[] = Array.from({length: n}, (_, i: number) => i + 1);
    if (includeZero) {
        digits.unshift(0);
    }
    return lexicographicPermutations(digits.map((t: number) => t.toString())).map((t: string) => parseInt(t));
}

/**
 * Champernowne's constant for base 10
 * Returns string to be more precise
 */
export function champernowneConstant(numberBound?: number, digitsBound?: number): string {
    assert(numberBound || digitsBound, 'champernowneConstant');
    let res: string = '0.';
    for (let i: number = 1; (numberBound ? i <= numberBound : true) && (digitsBound ? res.length - 2 < digitsBound : true); i++) {
        res += i.toString();
    }
    return res;
}

/**
 * Returns the nth polygonal number function
 */
export function polygonalNumber(s: number): (_: number) => number {
    assert(s > 2, 'polygonalNumber');
    return (n: number) => n + ((s - 2) * (n - 1) * n / 2);
}

/**
 * Checks if a number is a polygonal number
 */
export function isSPolygonal(s: number, x: number): boolean {
    assert(s > 2 && x > 0, 'isSPolygonal');
    return ((Math.sqrt(8 * (s - 2) * x + (s - 4) * (s - 4)) + (s - 4)) / (2 * s - 4)) % 1 == 0;
}

/**
 * Interfacing for the Fraction type
 */
export interface Fraction {
    numerator: bigint;
    denominator: bigint;
}

export interface ContinuedFraction {
    base: number;
    expansion: number[];
}

export interface InfiniteContinuedFraction extends ContinuedFraction {
}

/**
 * Reduces a fraction to its simplest form
 */
export function reduceFraction(f: Fraction): Fraction {
    const hcf: bigint = f.denominator > f.numerator ? gcd(f.denominator, f.numerator) : gcd(f.numerator, f.denominator);
    return {
        numerator: f.numerator / hcf,
        denominator: f.denominator / hcf
    };
}

/**
 * Sums two fractions without simplifying
 */
export function sumFractions(f1: Fraction, f2: Fraction): Fraction {
    return {
        numerator: f1.numerator * f2.denominator + f2.numerator * f1.denominator,
        denominator: f1.denominator * f2.denominator
    };
}

/**
 * Evaluates an infinite continued fraction expansion up to n
 */
export function continuedFractionExpansion(n: number, icf: InfiniteContinuedFraction): Fraction {
    const baseTerm: Fraction = {numerator: BigInt(icf.base), denominator: 1n};
    if (n === 0)
        return baseTerm;

    let term: Fraction = {numerator: BigInt(icf.expansion[(n - 1) % icf.expansion.length]), denominator: 1n};

    for (let i = n - 2; i >= 0; i--) {
        term = sumFractions({
            numerator: BigInt(icf.expansion[i % icf.expansion.length]),
            denominator: 1n
        }, {numerator: term.denominator, denominator: term.numerator});
    }

    return sumFractions(baseTerm, {
        numerator: term.denominator,
        denominator: term.numerator
    });
}

/**
 * Calculates the infinite continued fraction notation of a square root
 */
export function infiniteContinuedFractionNotationSqrt(n: number): InfiniteContinuedFraction {
    if (Number.isInteger(Math.sqrt(n)))
        return {base: Math.sqrt(n), expansion: []};

    // Step 1: Initialize variables
    const m0 = 0;
    const d0 = 1;
    const a0 = Math.floor(Math.sqrt(n)); // The integer part, i.e. highest t s.t. t^2 <= n
    const a = a0;

    const continuedFraction: number[] = [a0];

    let mn = m0;
    let dn = d0;
    let an = a;

    // A map to detect the cycle
    const seen: Map<string, boolean> = new Map<string, boolean>();

    // This will always terminate
    while (true) {
        // Step 2: Update variables using the recurrence relations
        mn = dn * an - mn;
        dn = (n - mn * mn) / dn;
        an = Math.floor((a0 + mn) / dn);
        // Mark the key as the combination of the three variables as this defines the point where we get the same value
        // Hence we found the endpoint for the cyclic part
        const key = `${mn},${dn},${an}`;
        if (seen[key])
            break;
        // If this is a new value, add it to the continued fraction
        seen[key] = true;
        continuedFraction.push(an);
    }

    return {base: continuedFraction[0], expansion: continuedFraction.slice(1)};
}

/**
 * Calculates the partition numbers with a given upper bound
 */
export function partitionNumbers(upperBoundInc: number): bigint[] {
    assert(upperBoundInc >= 0, 'partitionNumber');
    // We can use the pentagonal number theorem to find the solution
    // p(n) = sum_(k!=0) (-1)^(k-1) * p(n - g(k)) = sum_(k!=0) (-1)^(k-1) * p(n - k(3k-1)/2)
    // where g(k) = k(3k-1)/2 is the k-th pentagonal number (polygonalNumber(5)(k), also works on negatives)
    // Note that as soon as (n - k(3k-1)/2) is negative, we can stop the sum as the rest of the terms will be 0

    // Base cases
    if (upperBoundInc < 0) return [0n];
    if (upperBoundInc === 0) return [1n];
    // Generate the pentagonal number function
    const pNum = polygonalNumber(5);
    // Store previous results
    const results: bigint[] = numbersWithMaxSize(upperBoundInc + 1).map(t => 0n);
    results[0] = 1n;
    // Now loop from 1 to n to calculate what is needed (and possibly more)
    for (let i: number = 1; i <= upperBoundInc; i++) {
        let total: bigint = 0n;
        let k: number = 1;
        let pent1: number = pNum(k);
        let pent2: number = pNum(-k);

        while (pent1 <= i || pent2 <= i) {
            const sign: bigint = (k % 2 !== 0) ? 1n : -1n;
            if (pent1 <= i)
                total += sign * results[i - pent1];
            if (pent2 <= i)
                total += sign * results[i - pent2];
            k++;
            pent1 = pNum(k);
            pent2 = pNum(-k);
        }

        results[i] = total;
    }

    return results;
}

/**
 * Calculates the partition number for a given number
 */
export function partitionNumber(n: number): bigint {
    return partitionNumbers(n).slice(-1)[0];
}

/**
 * Calculates the square root of a bigint
 */
export function bigintSqrt(n: bigint): bigint {
    assert(n >= 0n, 'bigintSqrt');
    if (n < 2n)
        return n;

    // Newton's method
    function iteration(m: bigint, x0: bigint) {
        const x1 = ((m / x0) + x0) >> 1n;
        if (x0 === x1 || x0 === (x1 - 1n))
            return x0;
        return iteration(m, x1);
    }

    return iteration(n, 1n);
}

/**
 * Calculates the minimal solution in x to the Pell's equation x^2 - D * y^2 = 1 using continued fractions
 */
export function minimalPellSolution(D: number): [bigint, bigint] | undefined {
    const bigIntD: bigint = BigInt(D);
    if (Number.isInteger(Math.sqrt(D)))
        return undefined;
    // Get the continued fraction of the square root of D
    const cf: InfiniteContinuedFraction = infiniteContinuedFractionNotationSqrt(D);
    // Eventually the convergent sequence of infinite fraction evaluations should give a solution.
    // As these fractions are simplified, this should also be the minimal solution (x and y being as small as possible)
    let [x, y]: [bigint, bigint] = [0n, 0n];
    let n: number = 0;
    do {
        n++;
        const f = continuedFractionExpansion(n, cf);
        [x, y] = [f.numerator, f.denominator];
    } while (x * x - bigIntD * y * y != 1n);
    return [x, y];
}

/**
 * Generates a list of the number of proper divisors of each of the numbers 0..boundInc for given bound
 */
export function eulerPhiList(boundInc: number): number[] {
    // We use the sum property of the Euler's Totient function, which states that n = sum_{d|n}phi(d)
    const phis: number[] = [0, ...numbersWithMaxSize(boundInc)];
    // Every number n > 1 has at most n-1 proper divisors, so phi(n) <= n-1
    for (let i: number = 2; i <= boundInc; i++) {
        phis[i] = i - 1;
    }
    // Now loop and subtract phi(i) from all multiples of i
    for (let i: number = 2; i <= boundInc; i++) {
        for (let j: number = 2 * i; j <= boundInc; j += i) {
            phis[j] -= phis[i];
        }
    }
    return phis;
}
