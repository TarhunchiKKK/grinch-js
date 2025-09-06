import { AssertionError } from "../assertions";
import { TestResult } from "../tests";
import { SkipTestError, FailTestError, SucceedTestError } from "./errors";

/**
 * Provides utility methods for prematurely aborting or failing tests
 * by throwing specific errors.
 */
export class TestAborter {
    public success(message: string) {
        /**
         * Throws a SucceedTestError to indicate that the current test should be succeeded.
         */
        throw new SucceedTestError(message);
    }

    /**
     * Throws a SkipTestError to indicate that the current test should be skipped.
     */
    public skip(message: string) {
        throw new SkipTestError(message);
    }

    /**
     * Throws a FailTestError to indicate that the current test should fail.
     */
    public fail(message: string) {
        throw new FailTestError(message);
    }

    public static handleError(error: unknown): TestResult {
        if (error instanceof SucceedTestError) {
            return TestResult.FORCIBLY_SUCCEED;
        } else if (error instanceof SkipTestError) {
            return TestResult.FORCIBLY_SKIPED;
        } else if (error instanceof FailTestError) {
            return TestResult.FORCIBLY_FAILED;
        } else if (error instanceof AssertionError) {
            return TestResult.FAILED;
        } else {
            console.error(error);
            return TestResult.ERROR_DURING_TEST;
        }
    }
}
