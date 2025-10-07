export enum TestStatus {
    SUCCEED = 0,
    FAILED = 1,
    NOT_RUNED = 2,
    ERROR = 3
}

export type TestInfo = {
    title: string;

    status: TestStatus;
};

export type AvailableTestStates = Record<string, unknown> | null;
