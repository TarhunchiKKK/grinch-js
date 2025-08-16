import { AssertionFactory } from "../../assertions";
import { SampleTestCallback } from "../types/callbacks";
import { BaseTest } from "./base-test";

export class SampleTest extends BaseTest {
    public constructor(title: string, callback: SampleTestCallback) {
        const payload = {
            assert: new AssertionFactory()
        };

        super(title, payload, callback);
    }

    public async run() {
        await Promise.resolve(null);
    }
}
