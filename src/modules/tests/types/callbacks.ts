import { SampleTestPayload, SerialTestPayload, ParallelTestPayload } from "./payloads";

export type SampleTestCallback = (_: SampleTestPayload) => Promise<void>;

export type SerialTestCallback = (_: SerialTestPayload) => Promise<void>;

export type ParallelTestCallback = (_: ParallelTestPayload) => Promise<void>;

export type AnyTestCallback = SampleTestCallback | SerialTestCallback | ParallelTestCallback;
