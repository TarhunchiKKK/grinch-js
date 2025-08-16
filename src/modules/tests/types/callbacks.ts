import { SampleTestPayload, SerialTestPayload, ParallelTestPayload } from "./payloads";

export type SampleTestCallback<State> = (_: SampleTestPayload<State>) => Promise<void>;

export type SerialTestCallback<State> = (_: SerialTestPayload<State>) => void;

export type ParallelTestCallback<State> = (_: ParallelTestPayload<State>) => void;
