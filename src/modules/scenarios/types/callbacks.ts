import { TestFactory } from "../../tests";

type ScenarioCallbackPayload<State> = {
    test: TestFactory<State>;
};

export type ScenarioCallback<State> = (_: ScenarioCallbackPayload<State>) => void;
