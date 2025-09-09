import { TestAborter } from "@modules/test-aborting";
import { BaseTestFactory } from "./model/base-test-factory";

export enum TestResult {
    SUCCEED,
    FAILED,
    NOT_RUNED,
    ERROR
}

export type TestInfo = {
    title: string;

    result: TestResult;
};

export type AvailableTestStates = Record<string, unknown> | null;

type SampleTestPayload<State> = {
    state: State;

    abort: TestAborter;
};

export type SampleTestCallback<State> = (_: SampleTestPayload<State>) => void | Promise<void>;

type TestGroupPayload<State> = {
    test: BaseTestFactory<State>;
};

export type TestGroupCallback<State> = (_: TestGroupPayload<State>) => void;
