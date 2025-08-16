import { TestFactory } from "./test-factory";
import { TestRunner } from "./test-runner";

type DescribeCallbackArgument<State> = {
    test: TestFactory<State>;
};

export function describe<State>(title: string, state: State, callback: (arg: DescribeCallbackArgument<State>) => void) {
    const testFactory = new TestRunner(title, state).createTestFactory();
    callback({ test: testFactory });
}
