import { TestAborter } from "@modules/test-aborting";
import { BaseListener } from "./base-listener";
import { TestStatus } from "@shared/types";

export class ScheduledListener extends BaseListener {
    public start() {
        this.timeoutId = setTimeout(() => {
            void this.execute();
        }, this.delay);
    }

    public async execute() {
        try {
            await this.callback();

            this.status = TestStatus.SUCCEED;
        } catch (error) {
            this.status = TestAborter.handleError(error);
        }
    }
}

