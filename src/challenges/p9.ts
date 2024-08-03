import {findPythagoreanTriplet} from "../utilities/geometry";

// Average runtime ~0.19 ms
export function run(): number {
    // The numbers aren't that big, so a straightforward approach should work
    for (let a: number = 1; a < 10000; a++) {
        for (let b: number = 1; b < 1000; b++) {
            const c: number = findPythagoreanTriplet(a, b);
            if (c != -1 && a + b + c == 1000) {
                return a * b * c;
            }
        }
    }
}
