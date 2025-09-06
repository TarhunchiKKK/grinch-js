export class SucceedTestError extends Error {
    public constructor() {
        super("Test forcibly succeeded");
    }
}

export class FailTestError extends Error {
    public constructor() {
        super("Test forcibly failed");
    }
}

export class SkipTestError extends Error {
    public constructor() {
        super("Test forcibly skipped");
    }
}
