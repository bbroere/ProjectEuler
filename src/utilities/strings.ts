import {permutations} from "./sequences";

/**
 * Checks if a string or number is a palindrome
 */
export function checkPalindrome(s: string | number): boolean {
    return `${s}` === `${s}`.split("").reverse().join("");
}

/**
 * Calculates the alphabetical value of a string
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
    return permutations(l.sort(), (a: string, b: string) => a + b);
}