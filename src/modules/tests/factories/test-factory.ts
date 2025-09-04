import { BaseTestFactory } from "./base-test-factory";

/**
 * A concrete implementation of BaseTestFactory, providing methods for creating
 * sample, serial, and parallel tests, as well as lifecycle hooks.
 */
export class TestFactory<State> extends BaseTestFactory<State> {}
