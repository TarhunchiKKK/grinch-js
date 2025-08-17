import { LyfecycleHookPayload } from "../types/payloads";
import { Test, TestsStore } from "../types/test";

export abstract class TestsGroup<State> {
    protected testsStore: TestsStore<State> = {
        childrenTests: [],
        beforeEach: [],
        afterEach: []
    };

    public constructor(private payload: LyfecycleHookPayload<State>) {}

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
