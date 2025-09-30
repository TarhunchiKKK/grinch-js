import { TestInfo, TestStatus } from "@modules/tests";

export class Scenario implements TestInfo {
    public status = TestStatus.NOT_RUNED;

    public constructor(public title: string) {}
}
