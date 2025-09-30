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

export type TestResult = {
    title: string;
    status: "succeed" | "failed" | "error" | "not runed";
    children?: TestResult[];
};
