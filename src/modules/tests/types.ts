import { TestAborter } from "../test-aborting";
import { TestFactory } from "./test-factory";

export enum TestResult {
    // basic
    SUCCEED,
    FAILED,
    NOT_RUNED,
    ERROR_DURING_TEST,

    // for serial and parallel tests
    PARTIAL_SUCCEED,

    // for aborted tests
    FORCIBLY_SUCCEED,
    FORCIBLY_SKIPED,
    FORCIBLY_FAILED
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
    test: TestFactory<State>;
};

export type TestGroupCallback<State> = (_: TestGroupPayload<State>) => void;
