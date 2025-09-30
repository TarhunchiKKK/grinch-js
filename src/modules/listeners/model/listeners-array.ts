import { BaseListener } from "../classes/base-listener";
import { ListenerId } from "../types";

class ListenersArray {
    private listeners: (BaseListener | null)[] = [];

    public get id(): ListenerId {
        return this.listeners.length;
    }

    public add(listener: BaseListener) {
        this.listeners.push(listener);
    }

    public remove(id: ListenerId) {
        this.listeners[id] = null;
    }
}

export const ListenersStore = new ListenersArray();
