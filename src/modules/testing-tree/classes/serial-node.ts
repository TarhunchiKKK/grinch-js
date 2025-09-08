import {  TestGroup } from "@modules/tests";
import { GroupNode } from "./group-node";

export class SerialNode extends GroupNode {
    public constructor(test: TestGroup) {
        super(test);
    }

    public async run() {
        for (const child of this.children) {
            await this.runSingle(child);
        }
    }
}
