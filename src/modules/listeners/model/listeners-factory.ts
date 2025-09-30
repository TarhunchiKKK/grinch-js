import { ScheduledListener } from "../classes/scheduled-listener";
import { WaitingListener } from "../classes/waiting-listener";
import { ListenersStore } from "./listeners-array";
import { ListenerCallback } from "../types";

export class ListenersFactory<Params> {
    public constructor(private readonly callback: ListenerCallback<Params>) {}

    public wait(title: string, delay: number, params?: Params) {
        const id = ListenersStore.id;

        const listener = new WaitingListener(id, title, delay, () => this.callback({ params }));

        ListenersStore.add(listener);

        return () => listener.cancel();
    }

    public schedule(title: string, delay: number, params?: Params) {
        const id = ListenersStore.id;

        const listener = new ScheduledListener(id, title, delay, () => this.callback({ params }));

        ListenersStore.add(listener);

        return () => listener.cancel();
    }
}
