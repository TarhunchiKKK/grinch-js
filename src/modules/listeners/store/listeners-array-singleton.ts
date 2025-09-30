import { ListenersArray } from "./listeners-array";

export class ListenersArraySingleton {
    private static instance: ListenersArraySingleton;

    public array: ListenersArray;

    private constructor() {
        this.array = new ListenersArray();
    }

    public static getInstance(): ListenersArraySingleton {
        if (!ListenersArraySingleton.instance) {
            ListenersArraySingleton.instance = new ListenersArraySingleton();
        }

        return ListenersArraySingleton.instance;
    }
}
