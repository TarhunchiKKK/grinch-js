import { LifecycleHookCallback } from "@modules/lifecycle-hooks";
import { GroupNode } from "@modules/testing-tree";
import { abort } from "@modules/test-aborting";
import { SampleTestCallback, TestGroupCallback } from "../types";
import { SampleTest } from "../classes/sample-test";
import { TestGroup } from "../classes/test-group";
import { BaseTestFactory } from "./base-test-factory";
import { SkipTestFactory } from "./skip-test-factory";

export class TestFactory<State> extends BaseTestFactory<State> {
    public constructor(
        private testsStore: GroupNode,
        private state: State
    ) {
        super();
    }

    public sample(title: string, callback: SampleTestCallback<State>) {
        const payload = {
            state: this.state,
            abort: abort
        };

        const test = new SampleTest(title, () => callback(payload));

        this.testsStore.addLeaf(test);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public skip(_title: string, _callback: SampleTestCallback<State>) {}

    public serial(title: string, callback: TestGroupCallback<State>) {
        const test = new TestGroup(title);

        const testNode = this.testsStore.addSerial(test);

        const testFactory = new TestFactory(testNode, this.state);

        callback({ test: testFactory });
    }

    public parallel(title: string, callback: TestGroupCallback<State>) {
        const test = new TestGroup(title);

        const testNode = this.testsStore.addSerial(test);

        const testFactory = new TestFactory(testNode, this.state);

        callback({ test: testFactory });
    }

    public skipGroup(_title: string, callback: TestGroupCallback<State>) {
        callback({ test: new SkipTestFactory() });
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

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public skipHook(_callback: LifecycleHookCallback<State>) {}

    // ! Necessarily Check
    // public reuse<ReusableState>(
    //     title: string,
    //     test: State extends ReusableState ? ReusableTest<ReusableState> : never
    // ) {
    //     const testGroup = new TestGroup(title);

    //     const testNode = this.testsStore.addSerial(testGroup);

    //     const testFactory = new TestFactory(testNode, this.state);

    //     (test as ReusableTest<ReusableState>).callback({
    //         test: testFactory as unknown as TestFactory<ReusableState>
    //     });
    // }
}
