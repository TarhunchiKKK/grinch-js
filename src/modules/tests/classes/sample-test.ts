import { TestAborter } from "../../aborting";
import { Test } from "../types";

type Callback = () => void | Promise<void>;

export class SampleTest implements Test {
    public success: boolean | null = null;

    public constructor(
        public title: string,

        private callback: Callback
    ) {}

    public async run() {
        try {
            await this.callback();

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
