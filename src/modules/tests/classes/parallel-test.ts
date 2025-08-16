import { ParallelTestCallback } from "../types/callbacks";
import { ParallelTestPayload } from "../types/payloads";
import { TestFactory } from "../utils/test-factory";
import { BaseTest } from "./base-test";

export class ParallelTest extends BaseTest<ParallelTestPayload> {
    childrentests: BaseTest[] = [];

    public constructor(title: string, callback: ParallelTestCallback) {
        const payload = {
            test: new TestFactory(() => {})
        };
        super(title, payload, callback);
    }

    public async run() {
        await Promise.all([this.childrentests.map(test => test.run())]);
    }
}
