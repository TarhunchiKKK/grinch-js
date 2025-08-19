import { AssertionFactory } from "./modules/assertions";
import { ScenariosMapper, ScenariosMapperArgument } from "./modules/cli";
import { scenario } from "./modules/tests";

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

export { grinch, scenario, assert };
