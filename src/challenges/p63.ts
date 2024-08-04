// Average runtime ~7 ms
export function run(): number {
    let res: number = 0;
    const upperBound: number = Math.floor(Math.sqrt(10 ** 9));
    for (let i: number = 1; i < upperBound; i++) {
        for (let j: number = 1; j < 10; j++) {
            const n: number = j ** i;
            if (n >= 10 ** (i - 1) && n < 10 ** i) {
                res++;
            }
        }
    }
    return res;
}
