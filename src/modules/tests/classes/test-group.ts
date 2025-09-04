import { Test } from "../types/test";

export class TestGroup implements Test {
    public success: boolean | null = null;

    public constructor(public title: string) {}
}
