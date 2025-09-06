import { Test } from "../types";

export class TestGroup implements Test {
    public result: boolean | null = null;

    public constructor(public title: string) {}
}
