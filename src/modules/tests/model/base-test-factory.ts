import { LifecycleHookCallback } from "@modules/lifecycle-hooks";
import { SampleTestCallback, TestsGroupCallback } from "../types";

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
    //public abstract skip(_title: string, _callback: SampleTestCallback<State>): void;

    /**
     * Creates a tests group in which all children tests will be executed one after another.
     *
     * @param _title The title of the serial test.
     * @param callback The callback function that defines the logic of the serial test. It receives the current state.
     * @returns void
     */
    public abstract serial(title: string, callback: TestsGroupCallback<State>): void;

    /**
     * Creates a tests group in which all children tests will be executed concurrently.
     *
     * @param _title The title of the parallel test.
     * @param _callback The callback function that defines the logic of the parallel test. It receives the current state.
     * @returns void
     */
    public abstract parallel(title: string, callback: TestsGroupCallback<State>): void;

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

    // ! Necessarily Check
    // public reuse<ReusableState>(
    //     title: string,
    //     test: State extends ReusableState ? ReusableTest<ReusableState> : never
    // ) {
    //     const TestsGroup = new TestsGroup(title);

    //     const testNode = this.testsStore.addSerial(TestsGroup);

    //     const testFactory = new TestFactory(testNode, this.state);

    //     (test as ReusableTest<ReusableState>).callback({
    //         test: testFactory as unknown as TestFactory<ReusableState>
    //     });
    // }
}
