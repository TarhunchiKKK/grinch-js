import { TestGroup } from "../../tests/classes/test-group";
import { GroupNode } from "./group-node";

export class SerialNode extends GroupNode {
    public constructor(test: TestGroup) {
        super(test);
    }

    public async run() {
        for (const child of this.children) {
            await child.run();
        }
    }
}
