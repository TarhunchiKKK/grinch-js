import { TestInfo, TestResult } from "../types";

export class TestGroup implements TestInfo {
    public result = TestResult.NOT_RUNED;

    public constructor(public title: string) {}
}
