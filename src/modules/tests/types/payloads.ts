import { TestFactory } from "../utils/test-factory";

export type SampleTestPayload<State> = {
    state: State;
};

export type SerialTestPayload<State> = {
    test: TestFactory<State>;
};

export type ParallelTestPayload<State> = {
    test: TestFactory<State>;
};
