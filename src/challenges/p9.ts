import {checkPythagoreanTriplet} from "../utils";

export function run(): number {
    // The numbers aren't that big, so a straightforward approach should work
    let currentSum: number = 0;
    let currentProduct: number = 0;
    for (let a: number = 1; a < 10000 && currentSum != 1000; a++) {
        for (let b: number = 1; b < 1000 && currentSum != 1000; b++) {
            if (checkPythagoreanTriplet(a, b)) {
                currentSum = a + b + Math.sqrt(a * a + b * b);
                currentProduct = a * b * Math.sqrt(a * a + b * b);
            }
        }
    }
    if (currentSum == 1000) {
        return currentProduct;
    } else {
        console.error("No match");
        return -1;
    }
}