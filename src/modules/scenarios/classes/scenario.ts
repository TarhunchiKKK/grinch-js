import { Test } from "../../tests";

export class Scenario<State> implements Test {
    private childrenTests: Test[] = [];

    public success: boolean | null = null;

    public constructor(
        public title: string,

        private state: State
    ) {}

    public createTestFactory() {
        // return new ScenarioTestFactory(this.childrenTests, this.state);
    }
}
