import { AvailableTestStates, TestFactory } from "@modules/tests";
import { ReusableTestCallback } from "./types";

/**
 * Creates a new ReusableTestCreator instance with the provided test logic callback.
 *
 * @param callback The callback function containing the reusable test logic.
 * @returns A new ReusableTestCreator instance.
 */
export function createReusableTest<State extends AvailableTestStates>(callback: ReusableTestCallback<State>) {
    return callback;
}

/**
 * Reuses a test defined by a `ReusableTestCreator` within a test factory.
 *
 * @param title The title of the reused test.
 * @param factory The test factory where the test is being reused.
 * @param creator The `ReusableTestCreator` instance that defines the test.
 */
export function reuseTest<State extends ReusableState, ReusableState>(
    title: string,
    factory: TestFactory<State>,
    callback: ReusableTestCallback<ReusableState>
) {
    factory.serial(title, callback);
}
