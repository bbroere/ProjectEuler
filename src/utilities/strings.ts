import {permutations} from "./sequences";

/**
 * Checks if a string or number is a palindrome
 */
export function isPalindrome(s: string): boolean;
export function isPalindrome(n: number): boolean;
export function isPalindrome(d: string | number): boolean {
    return `${d}` === `${d}`.split("").reverse().join("");
}

/**
 * Calculates the alphabetical value of a string of uppercase characters
 */
export function alphabeticalValue(s: string): number {
    return s.split("")
        .map((c: string): number => c.charCodeAt(0) - 64)
        .reduce((c: number, n: number) => c + n, 0);
}

/**
 * Recursively creates a list of all permutations of a set of strings
 */
export function lexicographicPermutations(l: string[]): string[] {
    return permutations(l, (a: string, b: string) => a + b);
}

/**
 * Checks if two strings are permutations of each other
 */
export function arePermutations(a: string, b: string): boolean {
    return a.split("").sort().join("") === b.split("").sort().join("");
}

/**
 * Makes a list of all permutations of a given list with a given operation
 */
export function allPermutations(n: number): number[]
export function allPermutations(s: string): string[]
export function allPermutations(input: string | number): string[] | number[] {
    const res: string[] = permutations(`${input}`.split(""), (a: string, b: string) => a + b);
    switch (typeof input) {
        case "number":
            return res.map((s: string) => parseInt(s));
        case "string":
            return res;
    }
}
