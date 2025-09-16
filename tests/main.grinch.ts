import { mapScenarios } from "src";
import {
    BasicAssertionScenario,
    NumberAssertionScenario,
    StringAssertionScenario,
    ArrayAssertionScenario,
    RecordAssertionScenario,
    UnknownAssertionScenario
} from "./assertions";
import { TestsGroupingScenario, StateManagementScenario, ReportingScenario, ReusableTestsScenario } from "./behaviour";

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
    reporting: [ReportingScenario],
    reusable_tests: [ReusableTestsScenario]
});
