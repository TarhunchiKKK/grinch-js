import { ReusableTestCallback } from "./types";
import { ReusableTest } from "./reusable-test";
import { AvailableTestStates } from "@shared/types";

/**
 * Creates a new test instance with the provided test logic callback.
 *
 * @param callback The callback function containing the reusable test logic.
 * @returns A new reusable test callback.
 */
export function createReusableTest<State extends AvailableTestStates, Params = undefined>(
    callback: ReusableTestCallback<State, Params>
) {
    return new ReusableTest(callback);
}
