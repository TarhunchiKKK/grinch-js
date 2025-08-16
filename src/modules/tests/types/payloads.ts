import { AssertionFactory } from "../../assertions";
import { TestFactory } from "../utils/test-factory";

export type SampleTestPayload<State> = {
    assert: AssertionFactory;

    state: State;
};

export type SerialTestPayload<State> = {
    test: TestFactory<State>;
};

export type ParallelTestPayload<State> = {
    test: TestFactory<State>;
};
