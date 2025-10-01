import { ScheduledListenersFactory } from "./factories/scheduled-listeners-factory";
import { WaitingListenersFactory } from "./factories/waiting-listeners-factory";
import { ListenerCallback } from "./types";

export const listeners = {
    waiting<Params>(callback: ListenerCallback<Params>) {
        return new WaitingListenersFactory(callback);
    },

    scheduled<Params>(callback: ListenerCallback<Params>) {
        return new ScheduledListenersFactory(callback);
    }
};
