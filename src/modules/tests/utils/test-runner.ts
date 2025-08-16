import { BaseTest } from "../classes/base-test";
import { TestFactory } from "./test-factory";

export class TestRunner {
    private childrenTests: BaseTest[] = [];

    public constructor(private title: string) {}

    public createTestFactory() {
        return new TestFactory(this.childrenTests.push);
    }

    public async run() {
        for (const test of this.childrenTests) {
            await test.run();
        }
    }
}
