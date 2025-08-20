import { ReusableTestPayload } from "./payloads";

export type ReusableTestCallback<State> = (_: ReusableTestPayload<State>) => void;
