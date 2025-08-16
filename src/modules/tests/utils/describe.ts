import { TestFactory } from "./test-factory";
import { TestRunner } from "./test-runner";

export function describe(title: string, callback: (arg: { test: TestFactory }) => void) {
    const testFactory = new TestRunner(title).createTestFactory();
    callback({ test: testFactory });
}
