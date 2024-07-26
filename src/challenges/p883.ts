export function run(): number {
    const max: number = 10;
    const N1: number[] = Array.from({length: max}, (_, i: number) => i + 1);
    const NS1: number[] = N1.map((n: number) => Math.sqrt(3) * n).filter((n: number): boolean => n <= max);
    return 0;
}
