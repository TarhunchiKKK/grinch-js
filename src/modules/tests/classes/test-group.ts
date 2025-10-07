import { TestStatus } from "@shared/types";
import { TestInfo } from "../types";

export class TestsGroup implements TestInfo {
    public status = TestStatus.NOT_RUNED;

    public constructor(public title: string) {}
}
