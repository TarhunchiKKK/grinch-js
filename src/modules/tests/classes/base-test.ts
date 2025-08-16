import { AnyTestCallback } from "../types/callbacks";

export abstract class BaseTest {
    public constructor(
        private title: string,

        private callback: AnyTestCallback
    ) {}

    abstract run(): void | Promise<void>;
}
