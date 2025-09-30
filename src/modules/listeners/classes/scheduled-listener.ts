import { TestAborter } from "@modules/test-aborting";
import { BaseListener } from "./base-listener";
import { TestStatus } from "@modules/tests";

export class ScheduledListener extends BaseListener {
    public start() {
        this.timeoutId = setTimeout(() => {
            try {
                void this.callback();

                this.status = TestStatus.SUCCEED;
            } catch (error) {
                this.status = TestAborter.handleError(error);
            }
        }, this.delay);
    }
}
