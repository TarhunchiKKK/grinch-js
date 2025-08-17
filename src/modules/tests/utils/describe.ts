import { TestFactory } from "./test-factory";
import { TestRunner } from "./test-runner";

type AvailableStates = Record<string, unknown> | null;

type DescribeCallbackArgument<State> = {
    test: TestFactory<State>;
};

export function describe<State extends AvailableStates>(
    title: string,
    state: State,
    callback: (arg: DescribeCallbackArgument<State>) => void
) {
    const testFactory = new TestRunner(title, state).createTestFactory();
    callback({ test: testFactory });
}
