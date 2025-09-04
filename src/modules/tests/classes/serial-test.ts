import { abort } from "../../aborting";
import { SerialTestCallback } from "../types/callbacks";
import { Test } from "../types/test";
import { TestsGroup } from "./tests-group";

export class SerialTest<State> extends TestsGroup<State> implements Test {
    public constructor(
        public title: string,

        callback: SerialTestCallback<State>,

        state: State
    ) {
        super({ state, abort: abort });

        // callback({
        //     test: new TestFactory(this.testsStore, state, testResultPath)
        // });
    }

    public async run() {
        for (const test of this.testsStore.childrenTests) {
            await this.runOne(test);
        }
    }
}
