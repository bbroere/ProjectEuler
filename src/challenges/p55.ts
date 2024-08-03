import {isPalindrome} from "../utilities/strings";

// Average runtime ~14 ms
export function run(): number {
    const maxIterationsInc: number = 50;
    const maxNumberExc: number = 10000;
    let res: number = 0;

    for (let i: number = 1; i < maxNumberExc; i++) {
        let lychrel: boolean = true;
        let j: number = 0;
        let n: number = i;
        do {
            n = n + parseInt(n.toString().split("").reverse().join(""));
            lychrel = lychrel && !isPalindrome(n);
            j++;
        } while (j < maxIterationsInc && lychrel);
        if (lychrel) {
            res += 1;
        }
    }
    return res;
}
