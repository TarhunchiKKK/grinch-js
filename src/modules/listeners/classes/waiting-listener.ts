import { TestStatus } from "@shared/types";
import { BaseListener } from "./base-listener";
import { TestAborter, abort } from "@modules/test-aborting";
import { ListenerCallback } from "../types";
import { ListenersStore } from "../model/listeners-array";

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

export class WaitingListenersFactory<Params> {
    public constructor(private readonly callback: ListenerCallback<Params>) {}

    public apply(title: string, delay: number, params?: Params) {
        const id = ListenersStore.id;

        const listener = new WaitingListener(id, title, delay, () => this.callback({ params, abort }));

        ListenersStore.add(listener);

        return () => {
            ListenersStore.remove(id);
            listener.cancel();
        };
    }
}
