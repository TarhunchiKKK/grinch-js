import { TestInfo } from "@modules/tests";
import { TestStatus } from "@shared/lib";

export class Scenario implements TestInfo {
    public status = TestStatus.NOT_RUNED;

    public constructor(public title: string) {}
}
