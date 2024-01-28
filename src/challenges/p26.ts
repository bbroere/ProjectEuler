export function run(): number {
    // Let say n is coprime with both 2 and 5, i.e. has gcd of 1 with 10
    // If d is the period of repetition, then there is a b s.t. n * 10^(b+x*d) % 1 == n * 10^(b+(x+1)*d) % 1 for all x
    // This means that n * 10^b*10^(x*d) % 1 == n * 10^b*10^(x*d)*10^d % 1 for all x
    // So we deduce that 10^d must be 1 mod n as 10 and n are coprime
    // I read somewhere that if n and 10 are not coprime, and taking out all factors of 2 and 5 out of n gives a
    // remainder of q, then q and n have the same period :)
    let longest: number = 0;
    let result: number = 0;
    for (let i: number = 1; i < 1000; i++) {
        let n: number = i;
        while (Number.isInteger(n / 2)) {
            n /= 2;
        }
        while (Number.isInteger(n / 5)) {
            n /= 5;
        }
        if (n != 1) {
            let d: number = 1;
            // Keep intermediate result to keep the numbers low
            let r: number = 10 % n;
            while (![-1, 1].includes(r)) {
                d++;
                r *= 10;
                r %= n;
            }
            if (Math.pow(10, d) % n == -1) {
                d *= 2;
            }
            if (d > longest) {
                longest = d;
                result = i;
            }
        }
    }
    return result;
}
