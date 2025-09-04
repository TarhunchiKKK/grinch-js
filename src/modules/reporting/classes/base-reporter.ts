import { TestingResults } from "../utils/testing-results";

export abstract class BaseReporter {
    protected root = TestingResults.getInstance().tree.root;

    public abstract report(): void | Promise<void>;
}
