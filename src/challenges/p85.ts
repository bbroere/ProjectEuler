// Average runtime ~0.07 ms
export function run(): number {
    // Formula for number of squares in an l x b grid is
    // sum_n=0^l sum_m=0^b (l - n) * (b - m) = l * (l + 1) * b * (b + 1) / 4
    // We need to find the l and b such that the above formula is closest to 2_000_000
    // So given the result and l, we can calculate b as
    // b = (-1 + sqrt(1 + (16R / l(l + 1)))) / 2
    // We also know that both l and b are bigger than or equal to 1
    // So we know l is at most:
    // l = floor((-1 + sqrt(1 + 16R)) / 2)

    const targetTriangles: number = 2_000_000;
    const lengthLimit: number = Math.floor((-1 + Math.sqrt(1 + 4 * targetTriangles)) / 2);
    let closest: number = 0;
    let closestArea: number = 0;

    const trianglesFn = function (l: number, b: number): number {
        return l * (l + 1) * b * (b + 1) / 4;
    };

    for (let l: number = 1; l <= lengthLimit; l++) {
        const b: number = (-1 + Math.sqrt(1 + (16 * targetTriangles) / (l * (l + 1)))) / 2;
        const floorb: number = Math.floor(b);
        const ceilb: number = Math.ceil(b);
        if (Math.abs(trianglesFn(l, floorb) - targetTriangles) < Math.abs(closest - targetTriangles)) {
            closest = trianglesFn(l, floorb);
            closestArea = l * floorb;
        }
        if (Math.abs(trianglesFn(l, ceilb) - targetTriangles) < Math.abs(closest - targetTriangles)) {
            closest = trianglesFn(l, ceilb);
            closestArea = l * ceilb;
        }
    }
    return closestArea;
}
