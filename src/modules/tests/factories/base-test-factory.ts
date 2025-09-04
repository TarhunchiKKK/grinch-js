import { SampleTestCallback, SerialTestCallback, ParallelTestCallback } from "../types/callbacks";
import { ParallelTest } from "../classes/parallel-test";
import { SampleTest } from "../classes/sample-test";
import { SerialTest } from "../classes/serial-test";
import { TestsStore } from "../types/test";

export abstract class BaseTestFactory<State> {
    public constructor(
        protected testsStore: TestsStore<State>,

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
        const test = new SampleTest(title, callback, this.state);
        this.testsStore.childrenTests.push(test);
    }

    /**
     * Creates a serial test within the current test factory. Serial tests are executed one after another.
     *
     * @param title The title of the serial test.
     * @param callback The callback function that defines the logic of the serial test. It receives the current state.
     * @returns void
     */
    public serial(title: string, callback: SerialTestCallback<State>) {
        const test = new SerialTest(title, callback, this.state);
        this.testsStore.childrenTests.push(test);
    }

    /**
     * Creates a parallel test within the current test factory. Parallel tests are executed concurrently.
     *
     * @param title The title of the parallel test.
     * @param callback The callback function that defines the logic of the parallel test. It receives the current state.
     * @returns void
     */
    public parallel(title: string, callback: ParallelTestCallback<State>) {
        const test = new ParallelTest(title, callback, this.state);
        this.testsStore.childrenTests.push(test);
    }
}
