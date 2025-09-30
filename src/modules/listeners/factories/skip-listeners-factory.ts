import { BaseListenersFactory } from "./base-listeners-factory";

export class SkipListenersFactory<Params> extends BaseListenersFactory<Params> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public wait(_title: string, _delay: number, _params?: Params): void {}


    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public schedule(_title: string, _delay: number, _params?: Params): void {}
}
