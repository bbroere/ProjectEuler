export function run(): number {
    let res: number = 1;
    let index: number = 1;
    let stepSize: number = 2;
    while (index < 1001 * 1001) {
        for (let i: number = 1; i < 5; i++) {
            index += stepSize;
            res += index;
        }
        stepSize += 2;
    }
    return res;
}