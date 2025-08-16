import { SampleTestCallbackPayload, SerialTestCallbackPayload, ParallelTestCallbackPayload } from "./payloads";

export type SampleTestCallback = (_: SampleTestCallbackPayload) => void | Promise<void>;

export type SerialTestCallback = (_: SerialTestCallbackPayload) => void;

export type ParallelTestCallback = (_: ParallelTestCallbackPayload) => void;

export type AnyTestCallback = SampleTestCallback | SerialTestCallback | ParallelTestCallback;
