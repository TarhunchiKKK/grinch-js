import { AssertionFactory } from "../../assertions";

export type SampleTestPayload = {
    assert: AssertionFactory;
};

export type SerialTestPayload = {
    test: unknown;
};

export type ParallelTestPayload = {
    test: unknown;
};

export type AnyTestPayload = SampleTestPayload | SerialTestPayload | ParallelTestPayload;
