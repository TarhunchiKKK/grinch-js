import { LifecycleHookPayload } from "../types/payloads";
import { Test, TestsStore } from "../types/test";

export class TestsGroup<State> {
    protected testsStore: TestsStore<State> = {
        childrenTests: [],
        beforeEach: [],
        afterEach: []
    };

    public constructor(private payload: LifecycleHookPayload<State>) {}

    protected async runOne(test: Test) {
        for (const callback of this.testsStore.beforeEach) {
            await callback(this.payload);
        }

        await test.run();

        for (const callback of this.testsStore.afterEach) {
            await callback(this.payload);
        }
    }
}
