import { SampleTest } from "../../tests";
import { TestGroup } from "../../tests/classes/test-group";
import { LeafNode } from "./leaf-node";
import { ParallelNode } from "./parallel-node";
import { SerialNode } from "./serial-node";
import { TestNode } from "./types";

export abstract class GroupNode implements TestNode {
    public children: TestNode[] = [];

    public constructor(public test: TestGroup) {}

    public addLeaf<State>(test: SampleTest<State>) {
        const node = new LeafNode(test);
        this.children.push(node);
        return node;
    }

    public addSerial(test: TestGroup) {
        const node = new SerialNode(test);
        this.children.push(node);
        return node;
    }

    public addParallel(test: TestGroup) {
        const node = new ParallelNode(test);
        this.children.push(node);
        return node;
    }

    public abstract run(): Promise<void>;
}
