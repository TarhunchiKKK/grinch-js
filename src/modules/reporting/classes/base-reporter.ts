import { TestingResults } from "../model/testing-results";

export abstract class BaseReporter {
    protected testingTree = TestingResults.getInstance().tree;

    public abstract report(): void | Promise<void>;
}
