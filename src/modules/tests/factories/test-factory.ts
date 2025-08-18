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

export class TestFactory<State> extends BaseTestFactory<State, TestsStore<State>> {
    public sample(title: string, callback: SampleTestCallback<State>) {
        const test = new SampleTest(this.getNextTestResultPath(title), callback, this.state);

        this.testsStore.childrenTests.push(test);
    }

    public serial(title: string, callback: SerialTestCallback<State>) {
        const test = new SerialTest(this.getNextTestResultPath(title), callback, this.state);
        this.testsStore.childrenTests.push(test);
    }

    public parallel(title: string, callback: ParallelTestCallback<State>) {
        const test = new ParallelTest(this.getNextTestResultPath(title), callback, this.state);
        this.testsStore.childrenTests.push(test);
    }

    public beforeEach(callback: LyfecycleHookCallback<State>) {
        this.testsStore.beforeEach.push(callback);
    }

    public afterEach(callback: LyfecycleHookCallback<State>) {
        this.testsStore.afterEach.push(callback);
    }
}
