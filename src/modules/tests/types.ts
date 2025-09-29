import { TestAborter } from "@modules/test-aborting";
import { BaseTestFactory } from "./factories/base-test-factory";

export enum TestStatus {
    SUCCEED,
    FAILED,
    NOT_RUNED,
    ERROR
}

export type TestInfo = {
    title: string;

    status: TestStatus;
};

export type AvailableTestStates = Record<string, unknown> | null;

type SampleTestPayload<State> = {
    state: State;

    abort: TestAborter;
};

export type SampleTestCallback<State> = (_: SampleTestPayload<State>) => void | Promise<void>;

type TestsGroupPayload<State> = {
    test: BaseTestFactory<State>;
};

export type TestsGroupCallback<State> = (_: TestsGroupPayload<State>) => void;
