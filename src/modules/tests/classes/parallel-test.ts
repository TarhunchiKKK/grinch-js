import { EMPTY_TEST_FACTORY } from "../constants/test-factory";
import { ParallelTestCallback } from "../types/callbacks";
import { ParallelTestPayload } from "../types/payloads";
import { TestFactory } from "../utils/test-factory";
import { BaseTest } from "./base-test";

export class ParallelTest extends BaseTest<ParallelTestPayload> {
    private childrentests: BaseTest[] = [];

    public constructor(title: string, callback: ParallelTestCallback) {
        super(title, callback, {
            test: EMPTY_TEST_FACTORY
        });

        this.setTestFactory();
    }

    private setTestFactory() {
        this.payload.test = new TestFactory(this.childrentests.push);
    }

    public async run() {
        await Promise.all([this.childrentests.map(test => test.run())]);
    }
}
