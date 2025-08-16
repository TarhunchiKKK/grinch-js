import { AnyTestPayload } from "../types/payloads";

export abstract class BaseTest<Payload = AnyTestPayload> {
    public constructor(
        protected title: string,

        protected payload: Payload,

        protected callback: (_: Payload) => Promise<void>
    ) {}

    abstract run(): Promise<void>;
}
