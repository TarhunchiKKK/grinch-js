import { TestAborter, abort } from "../../aborting";
import { SampleTestCallback, SampleTestPayload } from "../types/callbacks";
import { Test } from "../types/test";

export class SampleTest<State> implements Test {
    private payload: SampleTestPayload<State>;

    public success: boolean | null = null;

    public constructor(
        public title: string,

        private callback: SampleTestCallback<State>,

        state: State
    ) {
        this.payload = {
            state: state,
            abort: abort
        };
    }

    public async run() {
        try {
            await this.callback(this.payload);

            this.success = true;
        } catch (error) {
            if (TestAborter.isFail(error)) {
                this.success = true;
            } else {
                this.success = false;
            }
        }
    }
}
