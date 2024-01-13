function checkPrime(n: number): boolean {
    const limit:number = Math.ceil(n / 2);
    for (let i = 2; i < limit; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

export function run(): void {
    let latestPrime: number = 2;
    let latestPrimeCnt: number = 1;
    for (let i: number = 3; latestPrimeCnt != 10001; i += 2) {
        if (checkPrime(i)) {
            latestPrime = i;
            latestPrimeCnt += 1;
        }
    }
    console.log(latestPrime);
}