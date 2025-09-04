import { LifecycleHookCallback } from "./callbacks";

export type Test = {
    title: string;

    run: () => Promise<void>;
};

export type TestsStore<State> = {
    childrenTests: Test[];

    beforeEach: LifecycleHookCallback<State>[];

    afterEach: LifecycleHookCallback<State>[];
};
