import { mapScenarios } from "src";
import {
    BasicExpectationScenario,
    NumberExpectationScenario,
    StringExpectationScenario,
    ArrayExpectationScenario,
    RecordExpectationScenario,
    UnknownExpectationScenario
} from "./assertions";
import { TestsGroupingScenario, StateManagementScenario, ReportingScenario, ReusableTestsScenario } from "./behaviour";

void mapScenarios({
    assertions: [
        BasicExpectationScenario,
        NumberExpectationScenario,
        StringExpectationScenario,
        ArrayExpectationScenario,
        RecordExpectationScenario,
        UnknownExpectationScenario
    ],
    grouping: [TestsGroupingScenario],
    state: [StateManagementScenario],
    reporting: [ReportingScenario],
    reusable_tests: [ReusableTestsScenario]
});
