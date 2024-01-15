/**
 * Checks if a string or number is a palindrome
 */
export function checkPalindrome(s: string | number): boolean {
    return `${s}` === `${s}`.split("").reverse().join("");
}