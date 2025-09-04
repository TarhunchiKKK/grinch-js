import { TestFactory } from "../../tests";

/**
 * A test factory specifically designed for use within scenarios.
 * It extends TestFactory and provides methods for creating sample, serial,
 * and parallel tests that are associated with a scenario.
 */
export class ScenarioTestFactory<State> extends TestFactory<State> {}
