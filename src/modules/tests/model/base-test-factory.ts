import { LifecycleHookCallback } from "@modules/lifecycle-hooks";
import { SampleTestCallback, TestGroupCallback } from "../types";

export abstract class BaseTestFactory<State> {
    /**
     * Creates a sample test within the current test factory. Sample tests are typically used for individual test cases.
     *
     * @param title The title of the sample test.
     * @param callback The callback function that defines the logic of the sample test. It receives the current state.
     * @returns void
     */
    public abstract sample(title: string, callback: SampleTestCallback<State>): void;

    /**
     * Creates a sample test which will not be executed. Sample tests are typically used for individual test cases.
     *
     * @param _title The title of the sample test.
     * @param _callback The callback function that defines the logic of the sample test. It receives the current state.
     * @returns void
     */
    public abstract skip(_title: string, _callback: SampleTestCallback<State>): void;

    /**
     * Creates a tests group in which all children tests will be executed one after another.
     *
     * @param _title The title of the serial test.
     * @param callback The callback function that defines the logic of the serial test. It receives the current state.
     * @returns void
     */
    public abstract serial(title: string, callback: TestGroupCallback<State>): void;

    /**
     * Creates a tests group in which all children tests will be executed concurrently.
     *
     * @param _title The title of the parallel test.
     * @param _callback The callback function that defines the logic of the parallel test. It receives the current state.
     * @returns void
     */
    public abstract parallel(title: string, callback: TestGroupCallback<State>): void;

    /**
     * Creates a tests group within the current test factory. This tests group will not be executed.
     *
     * @param title The title of the parallel test.
     * @param callback The callback function that defines the logic of the parallel test. It receives the current state.
     * @returns void
     */
    public abstract skipGroup(_title: string, _callback: TestGroupCallback<State>): void;

    /**
     * Registers a hook that runs before each test in the current group.
     *
     * @param _callback The callback function to be executed. It receives the current state.
     * @returns void
     */
    public abstract beforeEach(callback: LifecycleHookCallback<State>): void;

    /**
     * Registers a hook that runs after each test in the current group.
     *
     * @param _callback The callback function to be executed. It receives the current state.
     * @returns void
     */
    public abstract afterEach(callback: LifecycleHookCallback<State>): void;

    /**
     * A no-op function that can be used to skip a lifecycle hook.
     *
     * @param _callback The callback function to be skipped.
     * @returns void
     */
    public abstract skipHook(_callback: LifecycleHookCallback<State>): void;

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
