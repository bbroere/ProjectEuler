import {isPrime, primesWithUpperBound} from "../utilities/factorization";

// Average runtime ~106 ms
export function run(): number {
    const primes: number[] = primesWithUpperBound(10000);
    for (let i: number = 0; i < primes.length; i++) {
        for (let j: number = i + 1; j < primes.length; j++) {
            const prime1: string = primes[i].toString();
            const prime2: string = primes[j].toString();
            if (isPrime(Number(prime1 + prime2)) &&
                isPrime(Number(prime2 + prime1))) {
                for (let k: number = j + 1; k < primes.length; k++) {
                    const prime3: string = primes[k].toString();
                    if (isPrime(Number(prime1 + prime3)) &&
                        isPrime(Number(prime3 + prime1)) &&
                        isPrime(Number(prime2 + prime3)) &&
                        isPrime(Number(prime3 + prime2))) {
                        for (let l: number = k + 1; l < primes.length; l++) {
                            const prime4: string = primes[l].toString();
                            if (isPrime(Number(prime1 + prime4)) &&
                                isPrime(Number(prime4 + prime1)) &&
                                isPrime(Number(prime2 + prime4)) &&
                                isPrime(Number(prime4 + prime2)) &&
                                isPrime(Number(prime3 + prime4)) &&
                                isPrime(Number(prime4 + prime3))) {
                                for (let m: number = l + 1; m < primes.length; m++) {
                                    const prime5: string = primes[m].toString();
                                    if (isPrime(Number(prime1 + prime5)) &&
                                        isPrime(Number(prime5 + prime1)) &&
                                        isPrime(Number(prime2 + prime5)) &&
                                        isPrime(Number(prime5 + prime2)) &&
                                        isPrime(Number(prime3 + prime5)) &&
                                        isPrime(Number(prime5 + prime3)) &&
                                        isPrime(Number(prime4 + prime5)) &&
                                        isPrime(Number(prime5 + prime4))) {
                                        return primes[i] + primes[j] + primes[k] + primes[l] + primes[m];
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return undefined;
}
