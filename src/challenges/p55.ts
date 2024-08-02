import {isPalindrome} from "../utilities/strings";

function reverseAdd(n: number): number {
    return n + parseInt(n.toString().split("").reverse().join(""));
}

export function run(): number {
    const maxIterationsInc: number = 50;
    const maxNumberExc: number = 10000;
    let res: number = 0;

    for (let i: number = 1; i < maxNumberExc; i++) {
        let lychrel: boolean = true;
        let j: number = 0;
        let n: number = i;
        do {
            n = reverseAdd(n);
            lychrel = lychrel && !isPalindrome(n);
            j++;
        } while (j < maxIterationsInc && lychrel);
        if (lychrel) {
            res += 1;
        }
    }
    return res;
}
