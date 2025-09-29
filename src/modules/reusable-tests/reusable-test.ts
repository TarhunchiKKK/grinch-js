import { BaseTestFactory } from "@modules/tests";
import { ReusableTestCallback } from "./types";

export class ReusableTest<State, Params> {
    public constructor(private readonly callback: ReusableTestCallback<State, Params>) {}

    /**
     * Reuses a test defined by a `reusableTest` within a test factory.
     *
     * @param title The title of the reused test.
     * @param factory The test factory where the test is being reused.
     * @param params The value, contained parameters you pass to the test. Default to `undefined`.
     */
    public use<ScenarioState extends State>(title: string, factory: BaseTestFactory<ScenarioState>, params?: Params) {
        factory.serial(title, ({ test }) => this.callback({ test, params }));
    }
}
