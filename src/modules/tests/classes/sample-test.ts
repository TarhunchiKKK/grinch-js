import { TESTING_RESULTS } from "../../reporting";
import { TestAborter } from "../../test-aborting";
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
            state: state,
            abort: new TestAborter()
        };

        TESTING_RESULTS.setTestResult(this.testResultPath, false);
    }

    public async run() {
        try {
            await this.callback(this.payload);

            TESTING_RESULTS.setTestResult(this.testResultPath, true);
        } catch (error: unknown) {
            if (TestAborter.isFail(error)) {
                TESTING_RESULTS.setTestResult(this.testResultPath, true);
            }
        }
    }
}
