import { TestInfo, TestResult } from "@modules/tests";

export class Scenario implements TestInfo {
    public result = TestResult.NOT_RUNED;

    public constructor(public title: string) {}
}
