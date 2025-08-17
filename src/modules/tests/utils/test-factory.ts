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

export class TestFactory<State> {
    public constructor(
        private testsStore: TestsStore<State>,

        private state: State,

        private testResultPath: string[]
    ) {}

    private getNextTEstResultPath(step: string) {
        return [...this.testResultPath, step];
    }

    public sample(title: string, callback: SampleTestCallback<State>) {
        const test = new SampleTest(this.getNextTEstResultPath(title), callback, this.state);

        this.testsStore.childrenTests.push(test);
    }

    public serial(title: string, callback: SerialTestCallback<State>) {
        const test = new SerialTest(this.getNextTEstResultPath(title), callback, this.state);
        this.testsStore.childrenTests.push(test);
    }

    public parallel(title: string, callback: ParallelTestCallback<State>) {
        const test = new ParallelTest(this.getNextTEstResultPath(title), callback, this.state);
        this.testsStore.childrenTests.push(test);
    }

    public beforeEach(callback: LyfecycleHookCallback<State>) {
        this.testsStore.beforeEach.push(callback);
    }

    public afterEach(callback: LyfecycleHookCallback<State>) {
        this.testsStore.afterEach.push(callback);
    }
}
