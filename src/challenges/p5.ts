export {};

function run(): void {
    // Let's do this smart
    // Start from 20 and check of all numbers upto 20 that it is divisible by
    // Do the same for 19 and so on until you have a complete list of all factors
    const realisedFactors: number[] = [];
    let res: number = 1;
    let c: number = 20;
    while (c > 0) {
        if (!realisedFactors.includes(c)) {
            res *= c;
            realisedFactors.push(c);
            for (let i = 0; i < c; i++) {
                if (c % i == 0 && !realisedFactors.includes(i)) {
                    realisedFactors.push(i);
                }
            }
        }
        c--;
    }
    console.log(res);
}