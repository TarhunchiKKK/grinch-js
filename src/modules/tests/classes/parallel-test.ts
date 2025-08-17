import { TestAborter } from "../../test-aborting";
import { ParallelTestCallback } from "../types/callbacks";
import { Test } from "../types/test";
import { TestFactory } from "../utils/test-factory";
import { TestsGroup } from "./tests-group";

export class ParallelTest<State> extends TestsGroup<State> implements Test {
    public constructor(
        testResultPath: string[],

        callback: ParallelTestCallback<State>,

        state: State
    ) {
        super({ state: state, abort: new TestAborter() });

        callback({
            test: new TestFactory(this.testsStore, state, testResultPath)
        });
    }

    public async run() {
        await Promise.all([this.testsStore.childrenTests.map(test => this.runOne(test))]);
    }
}
