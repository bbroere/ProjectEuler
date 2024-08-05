import assert from "node:assert";
import {allDivisors} from "./factorization";
import {numbersWithMaxSize, sum} from "./sequences";
import {lexicographicPermutations} from "./strings";

/**
 * Calculates LCM of a list of arguments
 */
export function lcm(...args: number[]): number
export function lcm(...args: bigint[]): bigint
export function lcm(...args: number[] | bigint[]): number | bigint {
    assert(args.length > 1, 'lcm');
    switch (typeof args[0]) {
        case 'number':
            let a: number = (args[0] as number);
            for (let i: number = 1; i < args.length; i++) {
                let a_r: number = a;
                let b_r: number = (args[i] as number);
                while (a_r != b_r) {
                    if (a_r < b_r) {
                        a_r += a;
                    } else {
                        b_r += (args[i] as number);
                    }
                }
                a = a_r;
            }
            return a;
        case 'bigint':
            let b: bigint = (args[0] as bigint);
            for (let i: number = 1; i < args.length; i++) {
                let a_r: bigint = b;
                let b_r: bigint = (args[i] as bigint);
                while (a_r != b_r) {
                    if (a_r < b_r) {
                        a_r += b;
                    } else {
                        b_r += (args[i] as bigint);
                    }
                }
                b = a_r;
            }
            return b;
    }
}

/**
 * Returns the GCD of a list of arguments, based on the GCD formula
 */
export function gcd(...args: number[]): number;
export function gcd(...args: bigint[]): bigint;
export function gcd(...args: number[] | bigint[]): number | bigint {
    assert(args.length > 1, 'gcd');
    switch (typeof args[0]) {
        case 'number':
            return (args as number[]).reduce((c: number, n: number) => c * n, 1) / lcm(...(args as number[]));
        case 'bigint':
            return (args as bigint[]).reduce((c: bigint, n: bigint) => c * n, 1n) / lcm(...(args as bigint[]));
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
 * Calculates the nth denominator term of the expansion of the square root of 2
 * Recursive.
 */
function _sqrt2ExpansionFraction(n: number): Fraction {
    if (n == 0) {
        return {numerator: 1n, denominator: 2n};
    }
    const denominatorExpansion: Fraction = sumFractions({
        numerator: 2n,
        denominator: 1n
    }, _sqrt2ExpansionFraction(n - 1));
    return {
        numerator: denominatorExpansion.denominator,
        denominator: denominatorExpansion.numerator,
    };
}

/**
 * Calculates the nth expansion of the square root of 2
 */
export function sqrt2Expansion(n: number): Fraction {
    return sumFractions({numerator: 1n, denominator: 1n}, _sqrt2ExpansionFraction(n));
}
