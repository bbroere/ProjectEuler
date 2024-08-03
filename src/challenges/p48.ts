// Average runtime ~11 ms
export function run(): number {
    const max: number = 1000;
    const nofDigits: number = 10;
    let res: number = 0;
    for (let i: number = 1; i < max; i++) {
        let r: number = 1;
        for (let j: number = 1; j <= i; j++) {
            r = (r * i) % 10 ** nofDigits;
        }
        res = (res + r) % 10 ** nofDigits;
    }
    return res;
}
