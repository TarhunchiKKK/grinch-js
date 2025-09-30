import { BaseListener } from "./classes/base-listener";

class ListenersArray {
    private listeners: BaseListener[] = [];

    public get id() {
        return this.listeners.length;
    }

    public push(listener: BaseListener) {
        this.listeners.push(listener);
    }
}

export const ListenersStore = new ListenersArray();
