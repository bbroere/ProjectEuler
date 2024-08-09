import {forAll, sum} from "../utilities/sequences";
import {input} from "../inputs/p59";
import assert from "node:assert";

/**
 * <p>Each character on a computer is assigned a unique code and the preferred standard is ASCII (American Standard Code for Information Interchange). For example, uppercase A = 65, asterisk (*) = 42, and lowercase k = 107.</p>
 * <p>A modern encryption method is to take a text file, convert the bytes to ASCII, then XOR each byte with a given value, taken from a secret key. The advantage with the XOR function is that using the same encryption key on the cipher text, restores the plain text; for example, 65 XOR 42 = 107, then 107 XOR 42 = 65.</p>
 * <p>For unbreakable encryption, the key is the same length as the plain text message, and the key is made up of random bytes. The user would keep the encrypted message and the encryption key in different locations, and without both "halves", it is impossible to decrypt the message.</p>
 * <p>Unfortunately, this method is impractical for most users, so the modified method is to use a password as a key. If the password is shorter than the message, which is likely, the key is repeated cyclically throughout the message. The balance for this method is using a sufficiently long password key for security, but short enough to be memorable.</p>
 * <p>Your task has been made easy, as the encryption key consists of three lower case characters. Using <a href="https://projecteuler.net/resources/documents/0059_cipher.txt">0059_cipher.txt</a> (right click and 'Save Link/Target As...'), a file containing the encrypted ASCII codes, and the knowledge that the plain text must contain common English words, decrypt the message and find the sum of the ASCII values in the original text.</p>
 *
 * <p>Generated on 2024-08-09 from <a href='https://projecteuler.net/problem=59'>source</a></p>
 * <p><i><b>Average runtime ~22 ms</b></i></p>
 */
export function run(): number {
    const possibleKeys: [number, number, number][] = [];
    // Simple initial filter, fist character is upper case, second and third are lower case
    // So first number <= 90 and >= 65, second and third number <= 122 and >= 97 or a space
    for (let i: number = 97; i < 123; i++) {
        for (let j: number = 97; j < 123; j++) {
            for (let k: number = 97; k < 123; k++) {
                const key: [number, number, number] = [i, j, k];
                if (forAll(
                    input,
                    (c: number, index: number): boolean =>
                        String.fromCharCode(c ^ key[index % 3]).match(/[a-zA-Z 0-9.,!?:;'"()+-[\]]/i) !== null
                )) {
                    possibleKeys.push(key);
                }
            }
        }
    }
    assert(possibleKeys.length === 1, "There should be exactly one key");
    const key: [number, number, number] = possibleKeys[0];
    return sum(input.map((n: number, i: number): number => (n ^ key[i % 3]), 0));
}
