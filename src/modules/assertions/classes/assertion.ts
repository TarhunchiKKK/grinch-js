export class Assertion<T> {
    protected conditions: ((_: T) => boolean)[] = [];

    public constructor(protected readonly value: T) {}
}
