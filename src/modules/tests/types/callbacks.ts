import { TestAborter } from "../../aborting";
import { TestFactory } from "../factories/test-factory";

export type SampleTestPayload<State> = {
    state: State;

    abort: TestAborter;
};

export type TestGroup<State> = {
    test: TestFactory<State>;
};

export type SampleTestCallback<State> = (_: SampleTestPayload<State>) => void | Promise<void>;

export type TestGroupCallback<State> = (_: TestGroup<State>) => void;
