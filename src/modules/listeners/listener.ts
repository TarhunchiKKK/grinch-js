import { ListenerCallback } from "./types";

export class Listener<State, Params> {
    
    public constructor(private readonly callback: ListenerCallback<State, Params>) {}

    public waitFor(title: string, timeout: number, params?: Params) {}

    public waitUntil(title: string, timeout: number, params?: Params) {}
}
