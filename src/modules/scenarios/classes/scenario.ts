import { ScenarioTestFactory } from "../factories/scenario-test-factory";
import { Test } from "../../tests";

export class Scenario<State> implements Test {
    private childrenTests: Test[] = [];

    public constructor(
        public title: string,

        private state: State
    ) {}

    public createTestFactory() {
        return new ScenarioTestFactory(this.childrenTests, this.state, [this.title]);
    }

    public async run() {
        for (const test of this.childrenTests) {
            await test.run();
        }
    }
}
