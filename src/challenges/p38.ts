import {isPanDigital} from "../utilities/numbers";

export function run(): number {
    // We're looking for the largest pandigital number that can be formed by multiplying an integer by (1, 2, ..., n)
    // So we are looking for n pandigital, s.t. there is an x<n and m > 1 s.t. n=C(x,(x(1..m)*)) where C is the concatenation function
    // and * is the spread operator
    // From this we can derive the following bounds:
    // m=2: 5123 <= n <= 9876 (5000 contains zeros and 9999 contains only nines)
    // m=3: 123 <= n <= 321 (100 contains zeros and 33 contains only threes)
    // m=4: 31 <= n <= 32 (31 is the smallest s.t. 4*31>100 and does not contain zeros or duplicates, 33 contains only threes)
    // m=5: 6 <= n <= 9 (5 is the smallest s.t. 6*2>9 and does not contain zeros or duplicates)
    // m=6: 2 <= n <= 3 (2 is the smallest s.t. 4*2>9 and does not contain zeros or duplicates, 3 is the biggest s.t. 3*3<10)

    const solutionSpace: Map<number, [number, number]> = new Map<number, [number, number]>([
        [2, [5123, 9876]],
        [3, [123, 321]],
        [4, [31, 32]],
        [5, [6, 9]],
        [6, [2, 3]]
    ]);
    let maxPandigital: number = -1;

    solutionSpace.forEach((bounds: [number, number], m: number) => {
        for (let i = bounds[0]; i <= bounds[1]; i++) {
            let res: string = '';
            for (let j = 1; j <= m; j++) {
                res += (i * j).toString();
            }
            if(isPanDigital(res)) {
                maxPandigital = Math.max(maxPandigital, parseInt(res));
            }
        }
    });
    return maxPandigital;
}
