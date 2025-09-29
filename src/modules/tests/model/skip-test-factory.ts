import { LifecycleHookCallback } from "@modules/lifecycle-hooks";
import { SampleTestCallback, TestsGroupCallback } from "../types";
import { BaseTestFactory } from "./base-test-factory";

export class SkipTestFactory<State> extends BaseTestFactory<State> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public sample(_title: string, _callback: SampleTestCallback<State>) {}

    public serial(_title: string, callback: TestsGroupCallback<State>) {
        callback({ test: this });
    }

    public parallel(_title: string, callback: TestsGroupCallback<State>) {
        callback({ test: this });
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public beforeEach(_callback: LifecycleHookCallback<State>) {}

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public afterEach(_callback: LifecycleHookCallback<State>) {}
}
