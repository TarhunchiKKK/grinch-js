import { TestFactory } from "../tests";

export type ReusableTestPayload<State> = {
    test: TestFactory<State>;
};

export type ReusableTestCallback<State> = (_: ReusableTestPayload<State>) => void;
