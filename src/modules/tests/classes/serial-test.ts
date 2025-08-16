import { SerialTestCallback } from "../types/callbacks";
import { BaseTest } from "./base-test";

export class SerialTest extends BaseTest {
    public constructor(title: string, callback: SerialTestCallback) {
        super(title, callback);
    }

    public async run() {
        await Promise.resolve(null);
    }
}
