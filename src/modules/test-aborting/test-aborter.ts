import { TestStatus } from "@modules/tests";
import { AssertionError } from "@modules/assertions";
import { Logger } from "@shared/lib";
import { FailTestError, SucceedTestError } from "./errors";

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
     * Throws a FailTestError to indicate that the current test should fail.
     */
    public fail(message: string) {
        throw new FailTestError(message);
    }

    public static handleError(error: unknown): TestStatus {
        if (error instanceof SucceedTestError) {
            return TestStatus.SUCCEED;
        } else if (error instanceof FailTestError) {
            return TestStatus.FAILED;
        } else if (error instanceof AssertionError) {
            return TestStatus.FAILED;
        } else {
            Logger.red(error);
            return TestStatus.ERROR;
        }
    }
}
