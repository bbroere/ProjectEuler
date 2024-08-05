import {numbersWithMaxSize} from "../utilities/sequences";

// Average runtime ~1980 ms (needs improvement)
export function run(): number {
    const boundary: number = 10000000;

    const endingIn89List: (boolean | undefined)[] = numbersWithMaxSize(boundary).map((n: number): boolean => undefined);
    endingIn89List[0] = false;
    endingIn89List[43] = false;
    endingIn89List[84] = true;
    endingIn89List[88] = true;

    for (let i: number = 2; i < boundary; i++) {
        let current: number = i;
        do {
            current = current.toString().split("").map(Number).reduce((acc, val) => acc + val ** 2, 0);
        } while (endingIn89List[current - 1] === undefined);
        endingIn89List[i - 1] = endingIn89List[current - 1];
    }
    return endingIn89List.filter((t: boolean | undefined): boolean => t).length;
}
