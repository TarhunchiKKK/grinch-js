import { ParallelTestCallback } from "../types/callbacks";
import { BaseTest } from "./base-test";

export class ParallelTest extends BaseTest {
    public constructor(title: string, callback: ParallelTestCallback) {
        super(title, callback);
    }

    public async run() {
        await Promise.resolve(null);
    }
}
