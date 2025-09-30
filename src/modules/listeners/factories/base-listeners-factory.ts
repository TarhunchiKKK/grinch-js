import { ListenerCallback } from "../types";

export abstract class BaseListenersFactory<Params> {
    public constructor(protected readonly callback: ListenerCallback<Params>) {}

    public abstract  wait(title: string, delay: number, params?: Params): void;

    public abstract schedule(title: string, delay: number, params?: Params): void;
}