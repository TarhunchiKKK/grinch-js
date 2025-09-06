import { TestAborter } from "../../test-aborting";
import { TestInfo, TestResult } from "../types";

type Callback = () => void | Promise<void>;

export class SampleTest implements TestInfo {
    public result = TestResult.NOT_RUNED;

    public constructor(
        public title: string,

        private callback: Callback
    ) {}

    public async run() {
        try {
            await this.callback();

            this.result = TestResult.SUCCEED;
        } catch (error) {
            this.result = TestAborter.handleError(error);
        }
    }
}
