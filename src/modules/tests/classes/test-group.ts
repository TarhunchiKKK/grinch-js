import { TestInfo, TestStatus } from "@shared/types";

export class TestsGroup implements TestInfo {
    public status = TestStatus.NOT_RUNED;

    public constructor(public title: string) {}
}
