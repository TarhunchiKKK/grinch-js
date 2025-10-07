import { ReusableTestCallback } from "./types";
import { ReusableTest } from "./reusable-test";
import { AvailableScenraioStates } from "@modules/scenarios";

/**
 * Creates a new test instance with the provided test logic callback.
 *
 * @param callback The callback function containing the reusable test logic.
 * @returns A new reusable test callback.
 */
export function createReusableTest<State extends AvailableScenraioStates, Params = undefined>(
    callback: ReusableTestCallback<State, Params>
) {
    return new ReusableTest(callback);
}
