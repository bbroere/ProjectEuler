export {};

function checkTriple(a: number, b: number): boolean {
    const c = Math.sqrt(a * a + b * b);
    return Math.floor(c) == c;
}

function run(): void {
    // The numbers aren't that big, so a straightforward approach should work
    let currentSum = 0;
    let currentProduct = 0;
    for (let a = 1; a < 10000 && currentSum != 1000; a++) {
        for (let b = 1; b < 1000 && currentSum != 1000; b++) {
            if (checkTriple(a, b)) {
                currentSum = a + b + Math.sqrt(a * a + b * b);
                currentProduct = a * b * Math.sqrt(a * a + b * b);
            }
        }
    }
    if(currentSum == 1000) {
        console.log(currentProduct);
    } else {
        console.log("No match");
    }
}