import { ParallelTestCallback } from "../types/callbacks";
import { Test } from "../types/test";
import { TestFactory } from "../utils/test-factory";

export class ParallelTest<State> implements Test {
    private childrenTests: Test[] = [];

    public constructor(
        testResultPath: string[],

        callback: ParallelTestCallback<State>,

        state: State
    ) {
        callback({
            test: new TestFactory(this.childrenTests.push, state, testResultPath)
        });
    }

    public async run() {
        await Promise.all([this.childrenTests.map(test => test.run())]);
    }
}
