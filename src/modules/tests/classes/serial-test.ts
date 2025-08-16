import { SerialTestCallback } from "../types/callbacks";
import { SerialTestPayload } from "../types/payloads";
import { TestFactory } from "../utils/test-factory";
import { BaseTest } from "./base-test";

export class SerialTest extends BaseTest<SerialTestPayload> {
    private childrenTests: BaseTest[] = [];

    public constructor(title: string, callback: SerialTestCallback) {
        const payload = {
            test: new TestFactory(() => {})
        };

        super(title, payload, callback);
    }

    public async run() {
        for (const test of this.childrenTests) {
            await test.run();
        }
    }
}
