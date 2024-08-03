import {isPrime} from "../utilities/factorization";

// Average runtime ~94 ms
export function run(): number {
    const upperBound: number = 1000000;
    let resultSum: number = 0;
    for (let i: number = 11; i < upperBound; i++) {
        const s: string = String(i);
        let allRotationsPrime: boolean = true;
        for (let j: number = 1; j < s.length && allRotationsPrime; j++) {
            allRotationsPrime = isPrime(Number(s.slice(j))) && isPrime(Number(s.slice(0, j)));
        }
        if (isPrime(i) && allRotationsPrime) {
            resultSum += i;
        }
    }
    return resultSum;
}
