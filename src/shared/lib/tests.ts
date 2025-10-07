export enum TestStatus {
    SUCCEED,
    FAILED,
    NOT_RUNED,
    ERROR,
    CANCELED
}

type TestStringResult = "succeed" | "failed" | "error" | "not runed" | "canceled";

export type TestResult = {
    title: string;
    status: TestStringResult;
    children?: TestResult[];
};

export const TestStatusesMap: Record<TestStatus, TestStringResult> = {
    [TestStatus.SUCCEED]: "succeed",
    [TestStatus.FAILED]: "failed",
    [TestStatus.ERROR]: "error",
    [TestStatus.NOT_RUNED]: "not runed",
    [TestStatus.CANCELED]: "canceled"
};
