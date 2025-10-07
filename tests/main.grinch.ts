import { mapScenarios } from "../src/";
import {
    BasicExpectationScenario,
    NumberExpectationScenario,
    StringExpectationScenario,
    ArrayExpectationScenario,
    RecordExpectationScenario,
    UnknownExpectationScenario
} from "./expectations";
import { TestsGroupingScenario, StateManagementScenario, ReportingScenario, ReusableTestsScenario } from "./behaviour";

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
void mapScenarios({
    expectations: [
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
