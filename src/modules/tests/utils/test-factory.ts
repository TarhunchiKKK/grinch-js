import { BaseTest } from "../classes/base-test";
import { ParallelTest } from "../classes/parallel-test";
import { SampleTest } from "../classes/sample-test";
import { SerialTest } from "../classes/serial-test";
import { ParallelTestCallback, SampleTestCallback, SerialTestCallback } from "../types/callbacks";

export class TestFactory {
    public constructor(private onCreate: (_: BaseTest) => void) {}

    public sample(title: string, callback: SampleTestCallback) {
        const test = new SampleTest(title, callback);
        this.onCreate(test);
    }

    public serial(title: string, callback: SerialTestCallback) {
        const test = new SerialTest(title, callback);
        this.onCreate(test);
    }

    public parallel(title: string, callback: ParallelTestCallback) {
        const test = new ParallelTest(title, callback);
        this.onCreate(test);
    }
}
