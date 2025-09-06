import { TestingResults } from "../model/testing-results";

export abstract class BaseReporter {
    protected scenarios = TestingResults.getInstance().tree.scenarios;

    public abstract report(): void | Promise<void>;
}
