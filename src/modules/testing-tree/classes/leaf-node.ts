import { SampleTest } from "@modules/tests";
import { GroupNode } from "./group-node";
import { TestNode } from "../types";

export class LeafNode implements TestNode {
    public constructor(public test: SampleTest) {}

    public hasChildren(): this is GroupNode {
        return false;
    }

    public getInfo() {
        return this.test;
    }

    public async run() {
        await this.test.run();
    }
}
