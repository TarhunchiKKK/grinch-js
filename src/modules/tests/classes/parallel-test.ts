import { ParallelTestCallback } from "../types/callbacks";
import { TestFactory } from "../utils/test-factory";
import { BaseTest } from "./base-test";

export class ParallelTest extends BaseTest {
    public constructor(title: string, callback: ParallelTestCallback) {
        const payload = {
            test: new TestFactory(() => {})
        };
        super(title, payload, callback);
    }

    public async run() {
        await Promise.resolve(null);
    }
}
