import { AssertionsFactory } from "../../assertions";

type SampleTestCallbackPayload = {
    assert: AssertionsFactory;
};

export type SampleTestCallback = (_: SampleTestCallbackPayload) => void | Promise<void>;

type SerialTestCallbackPayload = {
    test: unknown;
};

export type SerialTestCallback = (_: SerialTestCallbackPayload) => void;

type ParallelTestCallbackPayload = {
    test: unknown;
};

export type ParallelTestCallback = (_: ParallelTestCallbackPayload) => void;

export type AnyTestCallback = SampleTestCallback | SerialTestCallback | ParallelTestCallback;
