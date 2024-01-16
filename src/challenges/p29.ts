export function run(): number {
    const upperbound: number = 100;
    const res: number[] = [];
    for (let a: number = 2; a <= upperbound; a++) {
        for (let b: number = 2; b <= upperbound; b++) {
            res.push(Math.pow(a, b));
        }
    }
    return res.filter((v: number, i: number, a: number[]) => a.indexOf(v) === i).length;
}