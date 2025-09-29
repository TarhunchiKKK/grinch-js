import { BaseTestFactory } from "@modules/tests";

type ReusableTestPayload<State, Params> = {
    test: BaseTestFactory<State>;

    params?: Params;
};

export type ReusableTestCallback<State, Params> = (_: ReusableTestPayload<State, Params>) => void;
