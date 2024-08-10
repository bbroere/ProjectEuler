import assert from "node:assert";
import {sum} from "./sequences";
import {gcd} from "./numbers";

/**
 * Based on Euclid's formula for Pythagorean triplets, this function returns the triplet for given n and m
 */
function _euclidPythagoreanTriplet(n: number, m: number): [number, number, number] {
    assert(m > n && n > 0, 'euclidPythagoreanTriplet');
    return [m * m - n * n, 2 * m * n, m * m + n * n];
}

/**
 * For 2 numbers a and b, it finds c s.t. c = sqrt(a^2 + b^2) is an integer.
 * If no such c exists, it returns -1 (for speed not undefined)
 */
export function findPythagoreanTriplet(a: number, b: number): number {
    const c: number = Math.sqrt(a * a + b * b);
    return Number.isInteger(c) ? c : -1;
}

/**
 * Returns all Pythagorean triplets with a sum less than or equal to the given bound
 */
export function pythagoreanTripletsWithSumBound(boundInc: number): [number, number, number][] {
    const triplets: Set<string> = new Set();
    const mnBound = Math.floor(Math.sqrt(boundInc / 2));
    for (let n: number = 1; n <= mnBound; n++) {
        for (let m: number = n + 1; m <= mnBound; m++) {
            if (gcd(m, n) == 1) {
                const triplet: [number, number, number] = _euclidPythagoreanTriplet(n, m);
                const sortedTriplet: [number, number, number] =
                    [Math.min(triplet[0], triplet[1]), Math.max(triplet[0], triplet[1]), triplet[2]];
                const sumTriplet: number = sum(sortedTriplet);
                const maxMultiplier: number = Math.floor(boundInc / sumTriplet);
                for (let c = 1; c <= maxMultiplier; c++)
                    triplets.add(JSON.stringify([sortedTriplet[0] * c, sortedTriplet[1] * c, sortedTriplet[2] * c]));
            }
        }
    }
    return [...triplets].map((t: string) => JSON.parse(t));
}
