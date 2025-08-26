import { v4 as uuidv4 } from "uuid";

export class Repository<T extends { id: string }> {
    public constructor(private items: T[]) {}

    public create(dto: Omit<T, "id">) {
        const item = {
            ...dto,
            id: uuidv4()
        } as T;

        this.items.push(item);

        return item;
    }

    public findAll(condition?: (item: T) => boolean) {
        if (condition) {
            return this.items.filter(condition);
        }

        return this.items;
    }

    public findOne(id: string) {
        return this.items.find(item => item.id === id) ?? null;
    }

    public findBy(condition: (item: T) => boolean) {
        return this.items.find(condition) ?? null;
    }

    public update(id: string, dto: Partial<Omit<T, "id">>) {
        const item = this.items.find(item => item.id === id);

        if (item) {
            Object.assign(item, dto);
        }
    }

    public remove(id: string) {
        this.items = this.items.filter(item => item.id !== id);
    }
}
