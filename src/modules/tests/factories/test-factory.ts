import { ParallelTest } from "../classes/parallel-test";
import { SampleTest } from "../classes/sample-test";
import { SerialTest } from "../classes/serial-test";
import {
    LyfecycleHookCallback,
    ParallelTestCallback,
    SampleTestCallback,
    SerialTestCallback
} from "../types/callbacks";
import { TestsStore } from "../types/test";
import { BaseTestFactory } from "./base-test-factory";

/**
 * A concrete implementation of BaseTestFactory, providing methods for creating
 * sample, serial, and parallel tests, as well as lifecycle hooks.
 */
export class TestFactory<State> extends BaseTestFactory<State, TestsStore<State>> {
    /**
     * Creates a sample test within the current test factory. Sample tests are typically used for individual test cases.
     *
     * @param title The title of the sample test.
     * @param callback The callback function that defines the logic of the sample test. It receives the current state.
     * @returns void
     */
    public sample(title: string, callback: SampleTestCallback<State>) {
        const test = new SampleTest(this.getNextTestResultPath(title), callback, this.state);
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
        const test = new SerialTest(this.getNextTestResultPath(title), callback, this.state);
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
        const test = new ParallelTest(this.getNextTestResultPath(title), callback, this.state);
        this.testsStore.childrenTests.push(test);
    }

    /**
     * Defines a lifecycle hook to be executed before each test within this factory.
     *
     * @param callback The callback function to be executed before each test. It receives the current state.
     * @returns void
     */
    public beforeEach(callback: LyfecycleHookCallback<State>) {
        this.testsStore.beforeEach.push(callback);
    }

    /**
     * Defines a lifecycle hook to be executed after each test within this factory.
     *
     * @param callback The callback function to be executed after each test. It receives the current state.
     * @returns void
     */
    public afterEach(callback: LyfecycleHookCallback<State>) {
        this.testsStore.afterEach.push(callback);
    }
}
