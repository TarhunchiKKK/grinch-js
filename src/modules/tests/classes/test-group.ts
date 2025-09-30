import { TestInfo, TestStatus } from "../types/core";

export class TestsGroup implements TestInfo {
    public status = TestStatus.NOT_RUNED;

    public constructor(public title: string) {}
}
