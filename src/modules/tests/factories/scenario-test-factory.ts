import { ParallelTest } from "../classes/parallel-test";
import { SampleTest } from "../classes/sample-test";
import { SerialTest } from "../classes/serial-test";
import { SampleTestCallback, SerialTestCallback, ParallelTestCallback } from "../types/callbacks";
import { Test } from "../types/test";
import { BaseTestFactory } from "./base-test-factory";

export class ScenarioTestFactory<State> extends BaseTestFactory<State, Test[]> {
    public sample(title: string, callback: SampleTestCallback<State>) {
        const test = new SampleTest(this.getNextTestResultPath(title), callback, this.state);

        this.testsStore.push(test);
    }

    public serial(title: string, callback: SerialTestCallback<State>) {
        const test = new SerialTest(this.getNextTestResultPath(title), callback, this.state);
        this.testsStore.push(test);
    }

    public parallel(title: string, callback: ParallelTestCallback<State>) {
        const test = new ParallelTest(this.getNextTestResultPath(title), callback, this.state);
        this.testsStore.push(test);
    }
}
