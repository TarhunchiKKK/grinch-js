import { SampleTestCallback, SerialTestCallback, ParallelTestCallback } from "../types/callbacks";

export abstract class BaseTestFactory<State, TestsStore> {
    public constructor(
        protected testsStore: TestsStore,

        protected getState: () => State,

        protected testResultPath: string[]
    ) {}

    protected getNextTestResultPath(step: string) {
        return [...this.testResultPath, step];
    }

    public abstract sample(title: string, callback: SampleTestCallback<State>): void;

    public abstract serial(title: string, callback: SerialTestCallback<State>): void;

    public abstract parallel(title: string, callback: ParallelTestCallback<State>): void;
}
