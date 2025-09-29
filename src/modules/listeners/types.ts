import { BaseTestFactory } from "@modules/tests";

type ListenerCallbackPayload<State, Params> = {
    test: BaseTestFactory<State>;

    params?: Params;
};

export type ListenerCallback<State, Params> = (payload: ListenerCallbackPayload<State, Params>) => void;
