export type DynamicObjectData<T> = {
    [key: string]: T | DynamicObjectData<T>;
};

export class DynamicObject<T> {
    public data: DynamicObjectData<T> = {};

    public addProperty(path: string[], value: T) {
        this.set(this.data, path, value);
    }

    private set(obj: DynamicObjectData<T>, path: string[], value: T): void {
        const [head, ...tail] = path;

        if (tail.length === 0) {
            obj[head] = value;
        } else {
            if (!obj[head] || typeof obj[head] !== "object") {
                obj[head] = {};
            }
            this.set(obj[head] as DynamicObjectData<T>, tail, value);
        }
    }
}
