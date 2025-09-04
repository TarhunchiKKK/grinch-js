import {
    BaseTestFactory,
    Test,
    SampleTestCallback,
    SampleTest,
    SerialTestCallback,
    SerialTest,
    ParallelTestCallback,
    ParallelTest
} from "../../tests";

/**
 * A test factory specifically designed for use within scenarios.
 * It extends BaseTestFactory and provides methods for creating sample, serial,
 * and parallel tests that are associated with a scenario.
 */
export class ScenarioTestFactory<State> extends BaseTestFactory<State, Test[]> {
    /**
     * Creates a new sample test within the scenario.
     *
     * @param title The title of the sample test.
     * @param callback The callback function containing the test logic.
     */
    public sample(title: string, callback: SampleTestCallback<State>) {
        const test = new SampleTest(title, callback, this.state);

        this.testsStore.push(test);
    }

    /**
     * Creates a new serial test within the scenario.
     *
     * @param title The title of the serial test.
     * @param callback The callback function containing the test logic.
     */
    public serial(title: string, callback: SerialTestCallback<State>) {
        const test = new SerialTest(title, callback, this.state);
        this.testsStore.push(test);
    }

    /**
     * Creates a new parallel test within the scenario.
     *
     * @param title The title of the parallel test.
     * @param callback The callback function containing the test logic.
     */
    public parallel(title: string, callback: ParallelTestCallback<State>) {
        const test = new ParallelTest(title, callback, this.state);
        this.testsStore.push(test);
    }
}
