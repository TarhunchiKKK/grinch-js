import { createScenario } from "./modules/scenarios";
import { assert } from "./modules/assertions";
import { createReusableTest, reuseTest } from "./modules/reusable-tests";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
BigInt.prototype["toJSON"] = function () {
    const int = Number.parseInt(this.toString());
    return int ?? this.toString();
};

const grinch = {
    scenario: createScenario,
    reusable: createReusableTest,
    reuse: reuseTest
};

export { grinch, assert };
