import { BaseTestFactory } from "@modules/tests";

type ReusableTestPayload<State> = {
    test: BaseTestFactory<State>;
};

export type ReusableTestCallback<State> = (_: ReusableTestPayload<State>) => void;
