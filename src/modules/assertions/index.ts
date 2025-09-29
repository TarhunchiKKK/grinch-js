import { AssertionFactory } from "./assertion-factory";

export { AssertionError } from "./lib/errors";

export const expect = new AssertionFactory();
