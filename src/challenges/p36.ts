import {checkPalindrome} from "../utilities/strings";
import {sumWithCondition} from "../utilities/sequences";

export function run(): number {
    const upperboundEx: number = 1000000;
    const palindromics: number[] = [];
    for (let p: number = 0; p < upperboundEx; p++) {
        checkPalindrome(p) ? checkPalindrome(p.toString(2)) ? palindromics.push(p) : {} : {};
    }
    return sumWithCondition(palindromics);
}
