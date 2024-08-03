// Average runtime ~0.001 ms
export function run(): number {
    const maxSize: number = 1001;
    let res: number = 1;
    let index: number = 1;
    let stepSize: number = 2;
    while (index < maxSize * maxSize) {
        for (let i: number = 1; i < 5; i++) {
            index += stepSize;
            res += index;
        }
        stepSize += 2;
    }
    return res;
}
