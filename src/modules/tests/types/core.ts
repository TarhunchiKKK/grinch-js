export enum TestStatus {
    SUCCEED = 0,
    FAILED = 1,
    NOT_RUNED = 2,
    ERROR = 3,
    CANCELED = 4
}

export type TestInfo = {
    title: string;

    status: TestStatus;
};

export type AvailableTestStates = Record<string, unknown> | null;

export type TestResult = {
    title: string;
    status: "succeed" | "failed" | "error" | "not runed";
    children?: TestResult[];
};
