type ListenerCallbackPayload<Params> = {
    params?: Params;
};

export type ListenerCallback<Params> = (payload: ListenerCallbackPayload<Params>) => void;

export type ListenerId = number;

export enum ListenerStatus {
    SUCCEED,
    FAILED,
    ERROR,
    NOT_RUNED,
}