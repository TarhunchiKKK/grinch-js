export class FailTestError extends Error {
    constructor() {
        super("Test failed.");
    }
}
