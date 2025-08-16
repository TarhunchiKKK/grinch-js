import { AnyTestPayload } from "../types/payloads";

export abstract class BaseTest<Payload = AnyTestPayload> {
    public constructor(
        protected title: string,

        protected callback: (_: Payload) => Promise<void>,

        protected payload: Payload
    ) {}

    abstract run(): Promise<void>;
}
