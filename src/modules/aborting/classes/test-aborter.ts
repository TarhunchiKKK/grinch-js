import { FailTestError } from "../utils/fail-test-error";
import { SkipTestError } from "../utils/skip-test-error";

export class TestAborter {
    public skip() {
        throw new SkipTestError();
    }

    public fail() {
        throw new FailTestError();
    }

    public static isSkip(error: unknown) {
        return error instanceof SkipTestError;
    }

    public static isFail(error: unknown) {
        return error instanceof FailTestError;
    }
}
