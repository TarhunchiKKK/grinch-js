import { ParallelTest } from "../classes/parallel-test";
import { SampleTest } from "../classes/sample-test";
import { SerialTest } from "../classes/serial-test";
import { ParallelTestCallback, SampleTestCallback, SerialTestCallback } from "../types/callbacks";
import { Test } from "../types/test";

export class TestFactory<State> {
    public constructor(
        private onCreate: (_: Test) => void,

        private state: State
    ) {}

    public sample(title: string, callback: SampleTestCallback<State>) {
        const test = new SampleTest(title, callback, this.state);
        this.onCreate(test);
    }

    public serial(title: string, callback: SerialTestCallback<State>) {
        const test = new SerialTest(title, callback, this.state);
        this.onCreate(test);
    }

    public parallel(title: string, callback: ParallelTestCallback<State>) {
        const test = new ParallelTest(title, callback, this.state);
        this.onCreate(test);
    }
}
