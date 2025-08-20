import { TestFactory } from "../../tests";

export type ReusableTestPayload<State> = {
    test: TestFactory<State>;
};
