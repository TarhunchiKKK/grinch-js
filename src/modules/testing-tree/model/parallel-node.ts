import { TestGroup } from "../../tests/classes/test-group";
import { GroupNode } from "./group-node";

export class ParallelNode extends GroupNode {
    public constructor(test: TestGroup) {
        super(test);
    }

    public async run() {
        await Promise.allSettled([this.children.map(child => child.run())]);
    }
}
