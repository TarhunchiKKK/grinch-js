import { LifecycleHookCallback } from "../types/callbacks";
import { BaseTestFactory } from "./base-test-factory";

/**
 * A concrete implementation of BaseTestFactory, providing methods for creating
 * sample, serial, and parallel tests, as well as lifecycle hooks.
 */
export class TestFactory<State> extends BaseTestFactory<State> {
    private hooks = {
        beforeEach: [] as LifecycleHookCallback<State>[],
        afterEach: [] as LifecycleHookCallback<State>[]
    };

    /**
     * Defines a lifecycle hook to be executed before each test within this factory.
     *
     * @param callback The callback function to be executed before each test. It receives the current state.
     * @returns void
     */
    public beforeEach(callback: LifecycleHookCallback<State>) {
        this.hooks.beforeEach.push(callback);
    }

    /**
     * Defines a lifecycle hook to be executed after each test within this factory.
     *
     * @param callback The callback function to be executed after each test. It receives the current state.
     * @returns void
     */
    public afterEach(callback: LifecycleHookCallback<State>) {
        this.hooks.afterEach.push(callback);
    }
}
