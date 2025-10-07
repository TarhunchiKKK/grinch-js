import { TestAborter } from "@core/aborting";
import { BaseTestFactory } from "../factories/base-test-factory";

type SampleTestPayload<State> = {
    state: State;

    abort: TestAborter;
};

export type SampleTestCallback<State> = (_: SampleTestPayload<State>) => void | Promise<void>;

type TestsGroupPayload<State> = {
    test: BaseTestFactory<State>;
};

export type TestsGroupCallback<State> = (_: TestsGroupPayload<State>) => void;
