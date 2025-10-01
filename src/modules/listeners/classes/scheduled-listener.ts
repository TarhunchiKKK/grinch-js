import { TestAborter, abort } from "@modules/test-aborting";
import { BaseListener } from "./base-listener";
import { TestStatus } from "@shared/types";
import { ListenersStore } from "../model/listeners-array";
import { ListenerCallback } from "../types";

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
export class ScheduledListenersFactory<Params> {
    public constructor(private readonly callback: ListenerCallback<Params>) {}

    public apply(title: string, delay: number, params?: Params) {
        const id = ListenersStore.id;

        const listener = new ScheduledListener(id, title, delay, () => this.callback({ params, abort }));

        ListenersStore.add(listener);

        return () => {
            ListenersStore.remove(id);
            listener.cancel();
        };
    }
}