import {primesWithUpperBound} from "../utilities/primes";

export function run(): number {
    // It is not the fastest, but it works
    const primes: number[] = primesWithUpperBound(1000000);
    const res: Set<number> = new Set<number>();
    for (const p of primes) {
        if (!res.has(p)) {
            const pStringArray: string[] = `${p}`.split("");
            const allRotations: number[] = [];
            for (let i: number = 0; i < pStringArray.length; i++) {
                allRotations.push(Number(pStringArray.slice(i).join("") + pStringArray.slice(0, i).join("")));
            }
            if (allRotations.filter((v: number) => primes.includes(v)).length == allRotations.length) {
                allRotations.forEach((t: number) => res.add(t));
            }
        }
    }
    return res.size;
}
