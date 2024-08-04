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
