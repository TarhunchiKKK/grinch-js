/* eslint-disable @typescript-eslint/no-unused-vars */
import { BaseListenersFactory } from "./base-listeners-factory";
import { SkipListenersFactory } from "./skip-listeners-factory";

export class ListenersFactory<Params> extends BaseListenersFactory<Params> {
    public get skip() {
        return new SkipListenersFactory(this.callback);
    }
    
    public wait(title: string, delay: number, params?: Params): void {
        throw new Error("Method not implemented.");
    }
    public schedule(title: string, delay: number, params?: Params): void {
        throw new Error("Method not implemented.");
    }
}
