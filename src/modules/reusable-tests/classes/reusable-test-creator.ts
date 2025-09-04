import { ReusableTestCallback } from "../types/callbacks";
import { ReusableTest } from "./reusable-test";

export class ReusableTestCreator<CreatorState> {
    public constructor(private callback: ReusableTestCallback<CreatorState>) {}

    public create(title: string, state: CreatorState) {
        return new ReusableTest(title, state, this.callback);
    }
}
