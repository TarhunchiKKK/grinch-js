import * as crypto from "crypto";
import * as util from "util";

/**
 * This function represents a mock async function that is needed for testing purposes
 */
export async function asyncTask() {
    const data = "some string";
    const salt = crypto.randomBytes(16).toString("hex");

    // Преобразуем callback-based функцию в Promise-based
    const pbkdf2Async = util.promisify(crypto.pbkdf2);

    const iterations = 100000;
    const keylen = 64;
    const digest = "sha512";

    await pbkdf2Async(data, salt, iterations, keylen, digest);
}
