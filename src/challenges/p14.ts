function collatzStep(n: number): number {
    if (n % 2 == 0) {
        return n / 2;
    }
    return 3 * n + 1;
}

export function run(): number {
    const chainLengths: Map<number, number> = new Map<number, number>();
    for (let i = 1; i < 1000000; i++) {
        let current = i;
        let length = 1;
        while (current != 1 && !chainLengths.has(current)) {
            current = collatzStep(current);
            length++;
        }
        if (chainLengths.has(current)) {
            chainLengths.set(i, length + chainLengths.get(current));
        } else {
            chainLengths.set(i, length);
        }
    }
    return Array.from(chainLengths.entries()).reduce((a, b) => a[1] < b[1] ? b : a)[0];
}