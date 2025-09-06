import { TestInfo } from "../tests";
import { GroupNode } from "./classes/group-node";
import { SerialNode } from "./classes/serial-node";
import { MappingResult, TreeToObjectMapper } from "./tree-to-object-mapper";

export class TestingTree {
    public children: GroupNode[] = [];

    public add(test: TestInfo) {
        this.children.push(new SerialNode(test));
        return this.children[this.children.length - 1];
    }

    public calculateResults() {
        for (const child of this.children) {
            child.getInfo();
        }
    }

    public async run() {
        await Promise.allSettled([this.children.map(child => child.run())]);
    }

    public toObject(): MappingResult[] {
        const mapper = new TreeToObjectMapper(this);
        return mapper.map();
    }
}
