import { TestAborter } from "../../aborting";
import { SerialTestCallback } from "../types/callbacks";
import { Test } from "../types/test";
import { TestFactory } from "../factories/test-factory";
import { TestsGroup } from "./tests-group";

export class SerialTest<State> extends TestsGroup<State> implements Test {
    private childrenTests: Test[] = [];

    public constructor(
        testResultPath: string[],

        callback: SerialTestCallback<State>,

        state: State
    ) {
        super({ state, abort: new TestAborter() });

        callback({
            test: new TestFactory(this.testsStore, state, testResultPath)
        });
    }

    public async run() {
        for (const test of this.childrenTests) {
            await this.runOne(test);
        }
    }
}
