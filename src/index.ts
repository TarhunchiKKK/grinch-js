import { AssertionFactory } from "./modules/assertions";
import { report } from "./modules/reporting";
import { describe, runTests } from "./modules/tests";

export const assert = new AssertionFactory();

export const grinch = {
    describe,
    report,
    run: runTests
};
