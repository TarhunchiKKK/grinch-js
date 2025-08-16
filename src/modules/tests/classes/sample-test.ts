import { AssertionFactory } from "../../assertions";
import { SampleTestCallback } from "../types/callbacks";
import { SampleTestPayload } from "../types/payloads";
import { Test } from "../types/test";

export class SampleTest<State> implements Test {
    private payload: SampleTestPayload<State>;

    public constructor(
        private title: string,

        private callback: SampleTestCallback<State>,

        state: State
    ) {
        this.payload = {
            assert: new AssertionFactory(),
            state: state
        };
    }

    public async run() {
        await this.callback(this.payload);
    }
}
