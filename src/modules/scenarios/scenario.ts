import { Test } from "../tests";

export class Scenario implements Test {
    public success: boolean | null = null;

    public constructor(public title: string) {}
}
