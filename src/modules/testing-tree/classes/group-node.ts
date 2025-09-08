import { SampleTest, TestInfo, TestGroup } from "@modules/tests";
import { LeafNode } from "./leaf-node";
import { ParallelNode } from "./parallel-node";
import { SerialNode } from "./serial-node";
import { TestNode } from "./types";

export abstract class GroupNode implements TestNode {
    public children: TestNode[] = [];

    public hooks = {
        beforeEach: [] as (() => void | Promise<void>)[],
        afterEach: [] as (() => void | Promise<void>)[]
    };

    public hasChildren(): this is GroupNode {
        return true;
    }

    public constructor(public test: TestGroup) {}

    public addLeaf(test: SampleTest) {
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

    protected async runSingle(node: TestNode) {
        for (const hook of this.hooks.beforeEach) {
            await hook();
        }

        await node.run();

        for (const hook of this.hooks.afterEach) {
            await hook();
        }
    }

    public abstract getInfo(): TestInfo;

    public abstract run(): Promise<void>;
}
