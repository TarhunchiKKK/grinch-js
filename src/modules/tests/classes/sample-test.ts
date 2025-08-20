import { TestingResults } from "../../reporting";
import { TestAborter, abort } from "../../aborting";
import { SampleTestCallback } from "../types/callbacks";
import { SampleTestPayload } from "../types/payloads";
import { Test } from "../types/test";

export class SampleTest<State> implements Test {
    private payload: SampleTestPayload<State>;

    private testingResults = TestingResults.getInstance();

    public constructor(
        private testResultPath: string[],

        private callback: SampleTestCallback<State>,

        getState: () => State
    ) {
        this.payload = {
            getState: getState,
            abort: abort
        };

        this.testingResults.add(this.testResultPath, false);
    }

    public async run() {
        try {
            await this.callback(this.payload);

            this.testingResults.add(this.testResultPath, true);
        } catch (error: unknown) {
            if (TestAborter.isFail(error)) {
                this.testingResults.add(this.testResultPath, true);
            }
        }
    }
}
