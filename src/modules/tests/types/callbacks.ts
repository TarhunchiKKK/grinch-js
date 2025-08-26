import { SampleTestPayload, SerialTestPayload, ParallelTestPayload, LifecycleHookPayload } from "./payloads";

export type SampleTestCallback<State> = (_: SampleTestPayload<State>) => void | Promise<void>;

export type SerialTestCallback<State> = (_: SerialTestPayload<State>) => void;

export type ParallelTestCallback<State> = (_: ParallelTestPayload<State>) => void;

export type LifecycleHookCallback<State> = (_: LifecycleHookPayload<State>) => void | Promise<void>;
