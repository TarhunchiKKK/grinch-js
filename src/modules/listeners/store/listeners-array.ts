export class ListenersArray {
    private listeners: unknown[] = [];

    public add(listener: unknown) {
        this.listeners.push(listener);
    }

    public waitAll() {}
}
