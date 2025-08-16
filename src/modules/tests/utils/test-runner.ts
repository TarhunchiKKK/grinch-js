import { Test } from "../types/test";
import { TestFactory } from "./test-factory";

export class TestRunner<State> {
    private childrenTests: Test[] = [];

    public constructor(
        private title: string,

        private state: State
    ) {}

    public createTestFactory() {
        return new TestFactory(this.childrenTests.push, this.state);
    }

    public async run() {
        for (const test of this.childrenTests) {
            await test.run();
        }
    }
}
