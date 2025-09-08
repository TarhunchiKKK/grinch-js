import { TestAborter } from "@modules/test-aborting";

type Payload<State> = {
    state: State;

    abort: TestAborter;
};

export type LifecycleHookCallback<State> = (_: Payload<State>) => void | Promise<void>;
