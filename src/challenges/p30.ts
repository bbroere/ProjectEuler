import {sum} from "../utilities/sequences";

// Average runtime ~800 ms
export function run(): number {
    const power: number = 5;
    const ub: number = upperBound(power);
    const res: number[] = [];
    for (let n: number = 2; n < ub; n++) {
        if (`${n}`.split("").map(Number).reduce((c: number, n: number) => c + Math.pow(n, power), 0) == n) {
            res.push(n);
        }
    }
    return sum(res);
}

function upperBound(p: number): number {
    // This problem has no solution for integers with n digits if n*9^p < 10^(n-1)
    let n: number = 1;
    while (Math.pow(10, n - 1) / n < Math.pow(9, p)) {
        n++;
    }
    return Math.ceil(Math.pow(10, n) / n);
}
