import { Test } from "../../tests";
import { TestsGroup } from "../../tests/classes/tests-group";

export class ReusableTest<State> extends TestsGroup<State> implements Test {
    public title: string = "";

    // public constructor(
    //     public title: string,

    //     state: State,

    //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
    //     callback: ReusableTestCallback<State>
    // ) {
    //     super({ state, abort: abort });

    //     // callback({
    //     //     test: new TestFactory(this.testsStore, state, testResultPath)
    //     // });
    // }

    public async run() {
        //     for (const test of this.testsStore.childrenTests) {
        //         await test.run();
        //     }
    }
}
