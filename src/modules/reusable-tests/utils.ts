import { AvailableTestStates } from "@modules/tests";
import { ReusableTestCallback } from "./types";
import { ReusableTest } from "./reusable-test";

/**
 * Creates a new test instance with the provided test logic callback.
 *
 * @param callback The callback function containing the reusable test logic.
 * @returns A new reusable test callback.
 */
export function createReusableTest<State extends AvailableTestStates, Params>(
    callback: ReusableTestCallback<State, Params>
) {
    return new ReusableTest(callback);
}
