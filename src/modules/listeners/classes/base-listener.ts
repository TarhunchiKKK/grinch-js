import { TestStatus } from "@shared/lib";
import { ListenerId } from "../types";

export abstract class BaseListener {
    public timeoutId?: NodeJS.Timeout;

    public status = TestStatus.NOT_RUNED;

    public constructor(
        public id: ListenerId,
        public title: string,
        public delay: number,
        public callback: () => void | Promise<void>
    ) {}

    public abstract start(): void;

    public cancel() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }

        this.status = TestStatus.CANCELED;
    }
}
