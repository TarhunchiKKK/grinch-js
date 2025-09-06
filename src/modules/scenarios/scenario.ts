import { TestInfo } from "../tests";

export class Scenario implements TestInfo {
    public result: boolean | null = null;

    public constructor(public title: string) {}
}
