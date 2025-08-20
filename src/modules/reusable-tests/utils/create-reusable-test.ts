import { AvailableScenarioStates } from "../../scenarios";
import { ReusableTestCreator } from "../classes/reusable-test-creator";
import { ReusableTestCallback } from "../types/callbacks";

/**
 * Creates a new ReusableTestCreator instance with the provided test logic callback.
 *
 * @param callback The callback function containing the reusable test logic.
 * @returns A new ReusableTestCreator instance.
 */
export function createReusableTest<State extends AvailableScenarioStates>(callback: ReusableTestCallback<State>) {
    return new ReusableTestCreator(callback);
}
