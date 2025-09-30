import { ListenerId } from "../types";

export abstract class BaseListener {
    public timeoutId?: NodeJS.Timeout;

    public resolved = false;
    
    public constructor(
        public id : ListenerId,
        public delay: number,
        public callback: () => void | Promise<void>,
    ) {}

    public abstract start(): void;

    public resolve() {
        if (!this.resolved) {
            this.resolved = true;
            void this.callback();
        }
    }

    public cancel() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId)
        }
    }
}
