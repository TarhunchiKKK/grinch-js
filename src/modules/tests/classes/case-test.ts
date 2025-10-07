import { TestAborter } from "@core/aborting";
import { TestStatus } from "@shared/lib";
import { TestInfo } from "../types";

type Callback = () => void | Promise<void>;

export class TestCase implements TestInfo {
    public status = TestStatus.NOT_RUNED;

    public constructor(
        public title: string,

        private callback: Callback
    ) {}

    public async run() {
        try {
            await this.callback();

            this.status = TestStatus.SUCCEED;
        } catch (error) {
            this.status = TestAborter.handleError(error);
        }
    }
}
