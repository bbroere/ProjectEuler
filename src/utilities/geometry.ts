/**
 * Checks for 2 numbers a and b if sqrt(a^2 + b^2) is an integer and, if so, returns it
 */
export function checkPythagoreanTriplet(a: number, b: number): number {
    const c: number = Math.sqrt(a * a + b * b);
    return Number.isInteger(c) ? c : -1;
}