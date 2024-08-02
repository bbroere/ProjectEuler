import {isPalindrome} from "../utilities/strings";
import {sum} from "../utilities/sequences";

export function run(): number {
    const upperboundEx: number = 1000000;
    const palindromics: number[] = [];
    for (let p: number = 0; p < upperboundEx; p++) {
        isPalindrome(p) ? isPalindrome(p.toString(2)) ? palindromics.push(p) : {} : {};
    }
    return sum(palindromics);
}
