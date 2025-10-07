import { ExpectationError } from "@core/expectations";
import { Logger } from "@shared/lib";
import { FailTestError, SucceedTestError } from "./errors";
import { TestStatus } from "@shared/types";

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

    public static handleError(error: unknown): TestStatus.FAILED | TestStatus.ERROR {
        if (error instanceof FailTestError || error instanceof ExpectationError) {
            return TestStatus.FAILED;
        }

        if (error instanceof Error) {
            Logger.red(error.message);
        } else {
            Logger.red(error);
        }

        return TestStatus.ERROR;
    }
}

export const abort = new TestAborter();
