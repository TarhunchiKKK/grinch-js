import { SampleTestCallback } from "../types/callbacks";
import { BaseTest } from "./base-test";

export class SampleTest extends BaseTest {
    public constructor(title: string, callback: SampleTestCallback) {
        super(title, callback);
    }

    public async run() {
        await Promise.resolve(null);
    }
}
