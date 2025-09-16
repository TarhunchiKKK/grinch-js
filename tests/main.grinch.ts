import { mapScenarios } from "src";
import {
    BasicAssertionScenario,
    NumberAssertionScenario,
    StringAssertionScenario,
    ArrayAssertionScenario,
    RecordAssertionScenario,
    UnknownAssertionScenario
} from "./assertions";
import { TestsGroupingScenario, StateManagementScenario, ReportingScenario } from "./behaviour";

mapScenarios({
    assertions: [
        BasicAssertionScenario,
        NumberAssertionScenario,
        StringAssertionScenario,
        ArrayAssertionScenario,
        RecordAssertionScenario,
        UnknownAssertionScenario
    ],
    grouping: [TestsGroupingScenario],
    state: [StateManagementScenario],
    reporting: [ReportingScenario]
});
