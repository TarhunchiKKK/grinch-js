import { LifecycleHookCallback } from "@modules/lifecycle-hooks";
import { SampleTestCallback, TestGroupCallback } from "../types";
import { BaseTestFactory } from "./base-test-factory";

export class SkipTestFactory<State> extends BaseTestFactory<State> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public sample(_title: string, _callback: SampleTestCallback<State>) {}

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public skip(_title: string, _callback: SampleTestCallback<State>) {}

    public serial(_title: string, callback: TestGroupCallback<State>) {
        callback({ test: this });
    }

    public parallel(_title: string, callback: TestGroupCallback<State>) {
        callback({ test: this });
    }

    public skipGroup(_title: string, callback: TestGroupCallback<State>) {
        callback({ test: this });
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public beforeEach(_callback: LifecycleHookCallback<State>) {}

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public afterEach(_callback: LifecycleHookCallback<State>) {}

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public skipHook(_callback: LifecycleHookCallback<State>) {}
}
