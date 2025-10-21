export enum TestStatus {
    SUCCEED,
    FAILED,
    NOT_RUNED,
    ERROR,
    CANCELED
}

export type TestResult = {
    title: string;
    status: TestStatus;
    children?: TestResult[];
};
