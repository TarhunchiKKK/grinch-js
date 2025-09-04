import { Test } from "../types";

export class TestGroup implements Test {
    public success: boolean | null = null;

    public constructor(public title: string) {}
}
