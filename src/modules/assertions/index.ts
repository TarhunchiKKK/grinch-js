import { AssertionFactory } from "./assertion-factory";

export { AssertionError } from "./lib/errors";

export const assert = new AssertionFactory();
