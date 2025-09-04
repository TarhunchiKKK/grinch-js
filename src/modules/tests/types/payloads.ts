import { TestAborter } from "../../aborting";
import { TestFactory } from "../factories/test-factory";

export type SampleTestPayload<State> = {
    state: State;

    abort: TestAborter;
};

export type SerialTestPayload<State> = {
    test: TestFactory<State>;
};

export type ParallelTestPayload<State> = {
    test: TestFactory<State>;
};


