import { SerialTestCallback } from "../types/callbacks";
import { TestFactory } from "../utils/test-factory";
import { BaseTest } from "./base-test";

export class SerialTest extends BaseTest {
    public childrenTests: BaseTest[] = [];

    public constructor(title: string, callback: SerialTestCallback) {
        const payload = {
            test: new TestFactory(() => {})
        };

        super(title, payload, callback);
    }

    public async run() {
        await Promise.resolve(null);
    }
}
