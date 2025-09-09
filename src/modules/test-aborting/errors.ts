export class SucceedTestError extends Error {
    public constructor(message: string) {
        super(message);
    }
}

export class FailTestError extends Error {
    public constructor(message: string) {
        super(message);
    }
}
