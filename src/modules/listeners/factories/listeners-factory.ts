import { ListenerCallback } from "../types";

export class ListenersFactory<Params> {
    public constructor(private readonly callback: ListenerCallback<Params>) {}

    public wait(title: string, delay: number, params?: Params) {}

    public schedule(title: string, delay: number, params?: Params) {}
}
