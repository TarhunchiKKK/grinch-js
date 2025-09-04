import { TestAborter } from "../../aborting";
import { ParallelTestCallback } from "../types/callbacks";
import { Test } from "../types/test";
import { TestsGroup } from "./tests-group";

export class ParallelTest<State> extends TestsGroup<State> implements Test {
    public constructor(
        public title: string,

        callback: ParallelTestCallback<State>,

        state: State
    ) {
        super({ state, abort: new TestAborter() });

        // callback({
        //     test: new TestFactory(this.testsStore, state, testResultPath)
        // });
    }

    public async run() {
        await Promise.all([this.testsStore.childrenTests.map(test => this.runOne(test))]);
    }
}
