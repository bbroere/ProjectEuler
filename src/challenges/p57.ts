interface Fraction {
    numerator: bigint;
    denominator: bigint;
}

function sumFractions(f1: Fraction, f2: Fraction): Fraction {
    return {
        numerator: f1.numerator * f2.denominator + f2.numerator * f1.denominator,
        denominator: f1.denominator * f2.denominator
    };
}

function sqrt2ExpansionFraction(n: number): Fraction {
    if (n == 0) {
        return {numerator: 1n, denominator: 2n};
    }
    const denomExpansion: Fraction = sumFractions({numerator: 2n, denominator: 1n}, sqrt2ExpansionFraction(n - 1));
    return {
        numerator: denomExpansion.denominator,
        denominator: denomExpansion.numerator,
    };
}

function sqrt2Expansion(n: number): Fraction {
    return sumFractions({numerator: 1n, denominator: 1n}, sqrt2ExpansionFraction(n));
}

export function run(): number {
    const nofExpansions: number = 1000;
    let res: number = 0;
    for (let i: number = 0; i < nofExpansions; i++) {
        const f: Fraction = sqrt2Expansion(i);
        if (f.numerator.toString().length > f.denominator.toString().length) {
            res++;
        }
    }
    return res;
}
