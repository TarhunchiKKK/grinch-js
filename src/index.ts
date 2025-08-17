import { AssertionFactory } from "./modules/assertions";
import { ScenariosMapper, ScenariosMapperArgument } from "./modules/cli";
import { scenario } from "./modules/tests";

const assert = new AssertionFactory();

function grinch(argument: ScenariosMapperArgument) {
    return new ScenariosMapper(argument);
}

export { grinch, scenario, assert };
