import { AssertionFactory } from "../../assertions";

export type SampleTestCallbackPayload = {
    assert: AssertionFactory;
};

export type SerialTestCallbackPayload = {
    test: unknown;
};

export type ParallelTestCallbackPayload = {
    test: unknown;
};

export type AnyTestCallbackPayload =
    | SampleTestCallbackPayload
    | SerialTestCallbackPayload
    | ParallelTestCallbackPayload;
