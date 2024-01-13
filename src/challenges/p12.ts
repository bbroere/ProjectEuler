export {};

function nofFactors(n: number): number {
    const res: Map<number, number> = new Map<number, number>();
    let remainder: number = n;
    let current: number = 2;
    while (remainder != 1) {
        if (remainder % current == 0) {
            if (res.has(current)) {
                res.set(current, res.get(current) + 1);
            } else {
                res.set(current, 1);
            }
            remainder = remainder / current;
        } else {
            current++;
        }
    }
    // If n = a^x*b^y*c^z.... then number of factors (including 1) is (x+1)(y+1)(z+1)...
    return [...res.values()].reduce((c, n) => c * (n + 1), 1);
}

function run(): void {
    let index: number = 1;
    let latest: number = index;
    while (nofFactors(latest) <= 500) {
        index++;
        latest += index;
    }
    console.log(latest);
}