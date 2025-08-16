import { TestFactory } from "./test-factory";
import { TestRunner } from "./test-runner";

export function describe<State>(title: string, state: State, callback: (arg: { test: TestFactory<State> }) => void) {
    const testFactory = new TestRunner(title, state).createTestFactory();
    callback({ test: testFactory });
}
