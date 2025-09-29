import { LifecycleHookCallback } from "@modules/lifecycle-hooks";
import { GroupNode } from "@modules/testing-tree";
import { abort } from "@modules/test-aborting";
import { SampleTestCallback, TestsGroupCallback } from "../types";
import { SampleTest } from "../classes/sample-test";
import { TestsGroup } from "../classes/test-group";
import { BaseTestFactory } from "./base-test-factory";
import { SkipTestFactory } from "./skip-test-factory";

export class TestFactory<State> extends BaseTestFactory<State> {
    public constructor(
        private testsStore: GroupNode,
        private state: State
    ) {
        super();
    }

    public get skip() {
        return new SkipTestFactory();
    }

    public sample(title: string, callback: SampleTestCallback<State>) {
        const payload = {
            state: this.state,
            abort: abort
        };

        const test = new SampleTest(title, () => callback(payload));

        this.testsStore.addLeaf(test);
    }

    public serial(title: string, callback: TestsGroupCallback<State>) {
        const test = new TestsGroup(title);

        const testNode = this.testsStore.addSerial(test);

        const testFactory = new TestFactory(testNode, this.state);

        callback({ test: testFactory });
    }

    public parallel(title: string, callback: TestsGroupCallback<State>) {
        const test = new TestsGroup(title);

        const testNode = this.testsStore.addSerial(test);

        const testFactory = new TestFactory(testNode, this.state);

        callback({ test: testFactory });
    }

    public beforeEach(callback: LifecycleHookCallback<State>) {
        this.testsStore.hooks.beforeEach.push(() =>
            callback({
                state: this.state,
                abort: abort
            })
        );
    }

    public afterEach(callback: LifecycleHookCallback<State>) {
        this.testsStore.hooks.afterEach.push(() =>
            callback({
                state: this.state,
                abort: abort
            })
        );
    }

    // ! Necessarily Check
    // public reuse<ReusableState>(
    //     title: string,
    //     test: State extends ReusableState ? ReusableTest<ReusableState> : never
    // ) {
    //     const TestsGroup = new TestsGroup(title);

    //     const testNode = this.testsStore.addSerial(TestsGroup);

    //     const testFactory = new TestFactory(testNode, this.state);

    //     (test as ReusableTest<ReusableState>).callback({
    //         test: testFactory as unknown as TestFactory<ReusableState>
    //     });
    // }
}
