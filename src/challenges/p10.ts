export function run(): number {
    // The numbers are getting a bit bigger so brute forcing this will already take some time
    // So let's be a bit smarter
    // We can easily handle arrays of length 2000000, so do it that way
    const primesList: number[] = [...Array(2000000).keys()];
    // 1 is not a prime
    primesList[1] = 0;
    for (let i: number = 2; i < 2000000; i++) {
        const num: number = primesList[i];
        if (num != 0) { // hence prime
            for (let j: number = 2 * num; j < 2000000; j += num) {
                primesList[j] = 0;
            }
        }
    }
    return primesList.filter(t => t != 0).reduce((c, n) => c + n, 0);
}