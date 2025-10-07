import { TestInfo } from "@modules/tests";
import { TestStatus } from "@shared/types";

export class Scenario implements TestInfo {
    public status = TestStatus.NOT_RUNED;

    public constructor(public title: string) {}
}
