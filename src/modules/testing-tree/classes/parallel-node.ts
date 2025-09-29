import { TestsGroup } from "@modules/tests";
import { GroupNode } from "./group-node";

export class ParallelNode extends GroupNode {
    public constructor(test: TestsGroup) {
        super(test);
    }

    public async run() {
        await Promise.allSettled([this.children.map(child => this.runSingle(child))]);
    }
}
