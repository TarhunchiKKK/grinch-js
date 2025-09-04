import { TestAborter } from "../aborting";
import { TestFactory } from "./test-factory";

export type Test = {
    title: string;

    success: boolean | null;
};

export type AvailableTestStates = Record<string, unknown> | null;

export type SampleTestPayload<State> = {
    state: State;

    abort: TestAborter;
};

export type TestGroupPayload<State> = {
    test: TestFactory<State>;
};

export type SampleTestCallback<State> = (_: SampleTestPayload<State>) => void | Promise<void>;

export type TestGroupCallback<State> = (_: TestGroupPayload<State>) => void;
