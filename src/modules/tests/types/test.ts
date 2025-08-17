import { LyfecycleHookCallback } from "./callbacks";

export type Test = {
    run: () => Promise<void>;
};

export type TestsStore<State> = {
    childrenTests: Test[];

    beforeEach: LyfecycleHookCallback<State>[];

    afterEach: LyfecycleHookCallback<State>[];
};
