import { TestResult } from "../tests";
import { SkipTestError, FailTestError, SucceedTestError } from "./errors";

/**
 * Provides utility methods for prematurely aborting or failing tests
 * by throwing specific errors.
 */
export class TestAborter {
    public success() {
        /**
         * Throws a SucceedTestError to indicate that the current test should be succeeded.
         */
        throw new SucceedTestError();
    }

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

    public static handleError(error: unknown): TestResult {
        if (error instanceof SucceedTestError) {
            return true;
        } else if (error instanceof SkipTestError) {
            return null;
        } else if (error instanceof FailTestError) {
            return false;
        } else {
            console.log(error);
            return false;
        }
    }
}
