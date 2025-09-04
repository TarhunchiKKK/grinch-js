import { abort } from "../../aborting";
import { Test } from "../../tests";
import { TestsGroup } from "../../tests/classes/tests-group";
import { ReusableTestCallback } from "../types/callbacks";

export class ReusableTest<State> extends TestsGroup<State> implements Test {
    public constructor(
        public title: string,

        state: State,

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        callback: ReusableTestCallback<State>
    ) {
        super({ state, abort: abort });

        // callback({
        //     test: new TestFactory(this.testsStore, state, testResultPath)
        // });
    }

    public async run() {
        for (const test of this.testsStore.childrenTests) {
            await test.run();
        }
    }
}
