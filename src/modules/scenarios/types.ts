import { TestFactory } from "@modules/tests";

export type AvailableScenraioStates = Record<string, unknown> | null;

type ScenarioCallbackPayload<State> = {
    test: TestFactory<State>;
};

export type ScenarioCallback<State> = (_: ScenarioCallbackPayload<State>) => void;
