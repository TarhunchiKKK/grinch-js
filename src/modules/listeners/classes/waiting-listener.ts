import { TestAborter } from "@core/aborting";
import { TestStatus } from "@shared/lib";
import { BaseListener } from "./base-listener";

export class WaitingListener extends BaseListener {
    public start(): void {
        this.timeoutId = setTimeout(() => {
            this.execute();
        }, this.delay);
    }

    private execute() {
        try {
            if (this.status === TestStatus.NOT_RUNED) {
                throw new Error(`WaitingListener "${this.title}" timed out after ${this.delay}ms`);
            }

            this.status = TestStatus.SUCCEED;
        } catch (error) {
            this.status = TestAborter.handleError(error);
        }
    }
}
