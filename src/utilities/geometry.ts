import assert from "node:assert";
import {filterUnique} from "./sequences";

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
export function pythagoreanTripletsWithSumBound(bound: number): [number, number, number][] {
    const triplets: [number, number, number][] = [];
    for (let n: number = 1; n < bound; n++) {
        for (let m: number = n + 1; m < bound; m++) {
            const triplet: [number, number, number] = _euclidPythagoreanTriplet(n, m);
            const tripletSum: number = triplet.reduce((a: number, b: number) => a + b);
            if (tripletSum > bound) {
                break;
            }
            triplets.push(triplet);
        }
    }
    // We only find non-divisible triplets, so we need to multiply them to get the divisible ones
    triplets.forEach((triplet: [number, number, number]) => {
        const tripletSum: number = triplet.reduce((a: number, b: number) => a + b);
        for (let i: number = 2; i * tripletSum <= bound; i++) {
            triplets.push(triplet.map((x: number) => x * i) as [number, number, number]);
        }
    });
    // In this process we have made duplicates, so filter them out
    return filterUnique(
        triplets.map((t: [number, number, number]) =>
            t.sort((a: number, b: number) => a - b) as [number, number, number]),
        (lhs: [number, number, number], rhs: [number, number, number]) => lhs[0] == rhs[0] && lhs[1] == rhs[1] && lhs[2] == rhs[2]
    );
}
