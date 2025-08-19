import { AssertionFactory } from "./modules/assertions";
import { createScenario } from "./compose/scenarios";
import { ScenariosMapperArgument, ScenariosMapper } from "./compose/cli";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
BigInt.prototype["toJSON"] = function () {
    const int = Number.parseInt(this.toString());
    return int ?? this.toString();
};

const assert = new AssertionFactory();

function grinch(argument: ScenariosMapperArgument) {
    return new ScenariosMapper(argument);
}

export { grinch, createScenario, assert };
