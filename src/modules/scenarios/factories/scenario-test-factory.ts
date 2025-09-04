import { BaseTestFactory } from "../../tests";

/**
 * A test factory specifically designed for use within scenarios.
 * It extends BaseTestFactory and provides methods for creating sample, serial,
 * and parallel tests that are associated with a scenario.
 */
export class ScenarioTestFactory<State> extends BaseTestFactory<State> {}
