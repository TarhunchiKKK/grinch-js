import { SampleTestCallback, TestGroupCallback } from "./types";
import { SampleTest } from "./classes/sample-test";
import { TestGroup } from "./classes/test-group";
import { GroupNode } from "../testing-tree";
import { abort } from "../aborting";

export class TestFactory<State> {
    public constructor(
        protected testsStore: GroupNode,

        protected state: State
    ) {}

    /**
     * Creates a sample test within the current test factory. Sample tests are typically used for individual test cases.
     *
     * @param title The title of the sample test.
     * @param callback The callback function that defines the logic of the sample test. It receives the current state.
     * @returns void
     */
    public sample(title: string, callback: SampleTestCallback<State>) {
        const payload = {
            state: this.state,
            abort: abort
        };

        const test = new SampleTest(title, () => callback(payload));

        this.testsStore.addLeaf(test);
    }

    /**
     * Creates a serial test within the current test factory. Serial tests are executed one after another.
     *
     * @param title The title of the serial test.
     * @param callback The callback function that defines the logic of the serial test. It receives the current state.
     * @returns void
     */
    public serial(title: string, callback: TestGroupCallback<State>) {
        const test = new TestGroup(title);

        const testNode = this.testsStore.addSerial(test);

        const testFactory = new TestFactory(testNode, this.state);

        callback({ test: testFactory });
    }

    /**
     * Creates a parallel test within the current test factory. Parallel tests are executed concurrently.
     *
     * @param title The title of the parallel test.
     * @param callback The callback function that defines the logic of the parallel test. It receives the current state.
     * @returns void
     */
    public parallel(title: string, callback: TestGroupCallback<State>) {
        const test = new TestGroup(title);

        const testNode = this.testsStore.addSerial(test);

        const testFactory = new TestFactory(testNode, this.state);

        callback({ test: testFactory });
    }

    // ! Necessarily Check
    // public reuse<ReusableState>(
    //     title: string,
    //     test: State extends ReusableState ? ReusableTest<ReusableState> : never
    // ) {
    //     const testGroup = new TestGroup(title);

    //     const testNode = this.testsStore.addSerial(testGroup);

    //     const testFactory = new TestFactory(testNode, this.state);

    //     (test as ReusableTest<ReusableState>).callback({
    //         test: testFactory as unknown as TestFactory<ReusableState>
    //     });
    // }
}
