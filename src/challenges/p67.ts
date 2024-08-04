import {input} from "../inputs/p67";
import {p18Public} from "./p18";

// Average runtime ~0.35 ms
export function run(): number {
    const triangle: number[][] = input.split("\n").map((t: string) => t.split(" ").map(Number));
    return p18Public(triangle);
}
