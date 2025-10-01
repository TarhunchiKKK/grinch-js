import { abort } from "@modules/test-aborting";
import { WaitingListener } from "../classes/waiting-listener";
import { ListenersStore } from "../listeners-array";
import { ListenerCallback } from "../types";

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
