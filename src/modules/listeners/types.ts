import { TestAborter } from "@modules/test-aborting";

type ListenerCallbackPayload<Params> = {
    params?: Params;

    abort: TestAborter;
};

export type ListenerCallback<Params> = (payload: ListenerCallbackPayload<Params>) => void;

export type ListenerId = number;
