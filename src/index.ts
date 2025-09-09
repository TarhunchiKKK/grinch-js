export { createScenario as scenario, mapScenarios } from "@modules/scenarios";
export { createReusableTest as reusableTest, reuseTest } from "@modules/reusable-tests";
export { assert } from "@modules/assertions";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
BigInt.prototype["toJSON"] = function () {
    const int = Number.parseInt(this.toString());
    return int ?? this.toString();
};
