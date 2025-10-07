import { abort } from "@core/aborting";
import { ScheduledListener } from "../classes/scheduled-listener";
import { ListenersStore } from "../listeners-array";
import { ListenerCallback } from "../types";

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
