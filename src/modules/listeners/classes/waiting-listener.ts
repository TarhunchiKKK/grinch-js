import { TestStatus } from "@modules/tests";
import { BaseListener } from "./base-listener";

export class WaitingListener extends BaseListener {
    public start(): void {
        this.timeoutId = setTimeout(() => {
            if (this.status === TestStatus.NOT_RUNED) {
                throw new Error(`WaitingListener "${this.title}" timed out after ${this.delay}ms`);
            }
        }, this.delay);
    }
}
