import { AnyTestCallback } from "../types/callbacks";
import { AnyTestCallbackPayload } from "../types/payloads";

export abstract class BaseTest {
    public constructor(
        private title: string,

        private payload: AnyTestCallbackPayload,

        private callback: AnyTestCallback
    ) {}

    abstract run(): Promise<void>;
}
