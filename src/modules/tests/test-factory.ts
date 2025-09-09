import { LifecycleHookCallback } from "@modules/lifecycle-hooks";
import { GroupNode } from "@modules/testing-tree";
import { abort } from "@modules/test-aborting";
import { SampleTestCallback, TestGroupCallback } from "./types";
import { SampleTest } from "./classes/sample-test";
import { TestGroup } from "./classes/test-group";

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
     * Creates a sample test which will not be executed. Sample tests are typically used for individual test cases.
     *
     * @param _title The title of the sample test.
     * @param _callback The callback function that defines the logic of the sample test. It receives the current state.
     * @returns void
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public skip(_title: string, _callback: SampleTestCallback<State>) {}

    /**
     * Creates a tests group in which all children tests will be executed one after another.
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
     * Creates a tests group in which all children tests will be executed concurrently.
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

    /**
     * Creates a tests group within the current test factory. This tests group will not be executed.
     *
     * @param title The title of the parallel test.
     * @param callback The callback function that defines the logic of the parallel test. It receives the current state.
     * @returns void
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public skipGroup(_title: string, _callback: TestGroupCallback<State>) {}

   
    /**
     * Registers a hook that runs before each test in the current group.
     *
     * @param callback The callback function to be executed. It receives the current state.
     * @returns void
     */
    public beforeEach(callback: LifecycleHookCallback<State>) {
        this.testsStore.hooks.beforeEach.push(() =>
            callback({
                state: this.state,
                abort: abort
            })
        );
    }

    /**
     * Registers a hook that runs after each test in the current group.
     *
     * @param callback The callback function to be executed. It receives the current state.
     * @returns void
     */
    public afterEach(callback: LifecycleHookCallback<State>) {
        this.testsStore.hooks.afterEach.push(() =>
            callback({
                state: this.state,
                abort: abort
            })
        );
    }

    /**
     * A no-op function that can be used to skip a lifecycle hook.
     *
     * @param _callback The callback function to be skipped.
     * @returns void
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public skipHook(_callback: LifecycleHookCallback<State>) {}

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