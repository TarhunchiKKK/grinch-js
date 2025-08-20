import { FailTestError } from "../utils/fail-test-error";
import { SkipTestError } from "../utils/skip-test-error";

/**
 * Provides utility methods for prematurely aborting or failing tests
 * by throwing specific errors.
 */
export class TestAborter {
    /**
     * Throws a SkipTestError to indicate that the current test should be skipped.
     */
    public skip() {
        throw new SkipTestError();
    }

    /**
     * Throws a FailTestError to indicate that the current test should fail.
     */
    public fail() {
        throw new FailTestError();
    }

    /**
     * Checks if the provided error is a SkipTestError.
     * @param error The error to check.
     */
    public static isSkip(error: unknown) {
        return error instanceof SkipTestError;
    }

    /**
     * Checks if the provided error is a FailTestError.
     * @param error The error to check.
     */
    public static isFail(error: unknown) {
        return error instanceof FailTestError;
    }
}
