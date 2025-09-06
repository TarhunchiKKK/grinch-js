import { BasicAssertionScenario } from "./basic/scenario";
import { NumberAssertionScenario } from "./number/scenario";
import { StringAssertionScenario } from "./string/scenario";
import { ArrayAssertionScenario } from "./array/scenario";
import { RecordAssertionScenario } from "./record/scenario";
import { UnknownAssertionScenario } from "./unknown/scenario";

export const Scenarios = [
    BasicAssertionScenario,
    NumberAssertionScenario,
    StringAssertionScenario,
    ArrayAssertionScenario,
    RecordAssertionScenario,
    UnknownAssertionScenario
];
