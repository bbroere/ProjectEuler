import {isPalindrome} from "../utilities/strings";

// Average runtime ~110 ms
export function run(): number {
    const upperboundEx: number = 1000000;
    let res: number = 0;
    for (let p: number = 0; p < upperboundEx; p++) {
        if (isPalindrome(p) && isPalindrome(p.toString(2))) {
            res += p;
        }
    }
    return res;
}
