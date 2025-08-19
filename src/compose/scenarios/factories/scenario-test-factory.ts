import {
    BaseTestFactory,
    Test,
    SampleTestCallback,
    SampleTest,
    SerialTestCallback,
    SerialTest,
    ParallelTestCallback,
    ParallelTest
} from "../../../modules/tests";

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
