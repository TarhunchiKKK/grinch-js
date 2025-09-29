import { BaseTestFactory } from "@modules/tests";
import { ReusableTestCallback } from "./types";

export class ReusableTest<State> {
    public constructor(private readonly callback: ReusableTestCallback<State>) {}

    /**
     * Reuses a test defined by a `reusableTest` within a test factory.
     *
     * @param title The title of the reused test.
     * @param factory The test factory where the test is being reused.
     * @param callback The callback that defines the test.
     */
    public use<ScenarioState extends State>(title: string, factory: BaseTestFactory<ScenarioState>) {
        factory.serial(title, this.callback);
    }
}
