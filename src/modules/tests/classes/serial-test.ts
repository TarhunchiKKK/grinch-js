import { EMPTY_TEST_FACTORY } from "../constants/test-factory";
import { SerialTestCallback } from "../types/callbacks";
import { SerialTestPayload } from "../types/payloads";
import { TestFactory } from "../utils/test-factory";
import { BaseTest } from "./base-test";

export class SerialTest extends BaseTest<SerialTestPayload> {
    private childrenTests: BaseTest[] = [];

    public constructor(title: string, callback: SerialTestCallback) {
        super(title, callback, {
            test: EMPTY_TEST_FACTORY
        });

        this.setTestFactory();
    }

    private setTestFactory() {
        this.payload.test = new TestFactory(this.childrenTests.push);
    }

    public async run() {
        for (const test of this.childrenTests) {
            await test.run();
        }
    }
}
