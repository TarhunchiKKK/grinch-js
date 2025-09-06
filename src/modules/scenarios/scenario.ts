import { Test } from "../tests";

export class Scenario implements Test {
    public result: boolean | null = null;

    public constructor(public title: string) {}
}
