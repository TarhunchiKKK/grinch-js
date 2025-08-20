import { ReusableTestCallback } from "../types/callbacks";
import { ReusableTest } from "./reusable-test";

export class ReusableTestCreator<State> {
    public constructor(private callback: ReusableTestCallback<State>) {}

    public create(testResultPath: string[], state: State) {
        return new ReusableTest(testResultPath, state, this.callback);
    }
}
