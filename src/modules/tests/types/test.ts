import { LifecycleHookCallback } from "./callbacks";

export type Test = {
    run: () => Promise<void>;
};

export type TestsStore<State> = {
    childrenTests: Test[];

    beforeEach: LifecycleHookCallback<State>[];

    afterEach: LifecycleHookCallback<State>[];
};
