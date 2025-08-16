import { SerialTestCallback } from "../types/callbacks";
import { Test } from "../types/test";
import { TestFactory } from "../utils/test-factory";

export class SerialTest<State> implements Test {
    private childrenTests: Test[] = [];

    public constructor(
        testResultPath: string[],

        callback: SerialTestCallback<State>,

        state: State
    ) {
        callback({
            test: new TestFactory(this.childrenTests.push, state, testResultPath)
        });
    }

    public async run() {
        for (const test of this.childrenTests) {
            await test.run();
        }
    }
}
