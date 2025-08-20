import { TestFactory } from "../../tests";
import { ReusableTest } from "../classes/reusable-test";
import { ReusableTestCreator } from "../classes/reusable-test-creator";

export function reuseTest<State extends CreatorState, CreatorState>(
    title: string,
    factory: TestFactory<State>,
    creator: ReusableTestCreator<CreatorState>
) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
    const testResultPath = (factory as any).getNextTestResultPath(title) as string[];

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
    const state = (factory as any).state as State;

    const test = creator.create(testResultPath, state) as unknown as ReusableTest<State>;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
    (factory as any).testsStore.childrenTests.push(test);
}
