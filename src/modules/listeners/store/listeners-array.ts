export class ListenersArray {
    private listeners: unknown[] = [];

    public push(listener: unknown) {
        this.listeners.push(listener);
    }

    public waitAll() {}
}
