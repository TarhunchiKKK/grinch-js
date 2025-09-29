import { ListenersArray } from "./listeners-array";

export class ListenersStoreSingleton {
    private static instance: ListenersStoreSingleton;

    public array: ListenersArray;

    private constructor() {
        this.array = new ListenersArray();
    }

    public static getInstance(): ListenersStoreSingleton {
        if (!ListenersStoreSingleton.instance) {
            ListenersStoreSingleton.instance = new ListenersStoreSingleton();
        }

        return ListenersStoreSingleton.instance;
    }
}
