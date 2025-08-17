import { TESTING_RESULTS } from "../../reporting";
import { SampleTestCallback } from "../types/callbacks";
import { SampleTestPayload } from "../types/payloads";
import { Test } from "../types/test";

export class SampleTest<State> implements Test {
    private payload: SampleTestPayload<State>;

    public constructor(
        private testResultPath: string[],

        private callback: SampleTestCallback<State>,

        state: State
    ) {
        this.payload = {
            state: state
        };

        TESTING_RESULTS.setTestResult(this.testResultPath, false);
    }

    public async run() {
        await this.callback(this.payload);

        TESTING_RESULTS.setTestResult(this.testResultPath, true);
    }
}
