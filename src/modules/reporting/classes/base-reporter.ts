import { TestingResults } from "../utils/testing-results";

export abstract class BaseReporter {
    protected testingResults = TestingResults.getResults();

    public abstract report(): void | Promise<void>;
}
