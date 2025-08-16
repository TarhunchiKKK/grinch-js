import { AssertionFactory } from "../../assertions";
import { SampleTestCallback } from "../types/callbacks";
import { SampleTestPayload } from "../types/payloads";
import { BaseTest } from "./base-test";

export class SampleTest extends BaseTest<SampleTestPayload> {
    public constructor(title: string, callback: SampleTestCallback) {
        const payload = {
            assert: new AssertionFactory()
        };

        super(title, payload, callback);
    }

    public async run() {
        await this.callback(this.payload);
    }
}
