function lcm(a: number, b: number): number {
    let a_r: number = a;
    let b_r: number = b;
    while (a_r != b_r) {
        if (a_r < b_r) {
            a_r += a;
        } else {
            b_r += b;
        }
    }
    return a_r;
}

export function run(): void {
    // This is simply the lcm of all numbers
    let res: number = 1;
    for (let i = 2; i < 21; i++) {
        res = lcm(res, i);
    }
    console.log(res);
}