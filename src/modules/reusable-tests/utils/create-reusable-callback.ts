import { AvailableScenarioStates } from "../../scenarios";
import { ReusableTestCreator } from "../classes/reusable-test-creator";
import { ReusableTestCallback } from "../types/callbacks";

export function createReusableCallback<State extends AvailableScenarioStates>(callback: ReusableTestCallback<State>) {
    return new ReusableTestCreator(callback);
}
