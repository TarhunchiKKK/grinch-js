import { BaseListener } from "../classes/base-listener";
import { ListenerId } from "../types";

class ListenersArray {
    private listeners: BaseListener[] = [];

    public get id(): ListenerId {
        return this.listeners.length;
    }

    public add(listener: BaseListener) {
        this.listeners.push(listener);
    }
}

export const ListenersStore = new ListenersArray();
