export class FailTestError extends Error {
    constructor() {
        super("Test forcibly failed");
    }
}

export class SkipTestError extends Error {
    public constructor() {
        super("Test forcibly skipped");
    }
}
