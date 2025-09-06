import { TestAborter } from "../../test-aborting";
import { Test } from "../types";

type Callback = () => void | Promise<void>;

export class SampleTest implements Test {
    public result: boolean | null = null;

    public constructor(
        public title: string,

        private callback: Callback
    ) {}

    public async run() {
        try {
            await this.callback();

            this.result = true;
        } catch (error) {
            this.result = TestAborter.handleError(error);
        }
    }
}
