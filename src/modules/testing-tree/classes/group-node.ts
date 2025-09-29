import { SampleTest, TestsGroup, TestStatus } from "@modules/tests";
import { LeafNode } from "./leaf-node";
import { ParallelNode } from "./parallel-node";
import { SerialNode } from "./serial-node";
import { TestNode } from "../types";

export abstract class GroupNode implements TestNode {
    public children: TestNode[] = [];

    public hooks = {
        beforeEach: [] as (() => void | Promise<void>)[],
        afterEach: [] as (() => void | Promise<void>)[]
    };

    public constructor(public test: TestsGroup) {}

    public hasChildren(): this is GroupNode {
        return true;
    }

    public getInfo() {
        const childrenInfos = this.children.map(child => child.getInfo());

        for (const info of childrenInfos) {
            if (info.status === TestStatus.FAILED || info.status === TestStatus.ERROR) {
                this.test.status = TestStatus.FAILED;
                return this.test;
            }
        }

        this.test.status = TestStatus.SUCCEED;
        return this.test;
    }

    public addLeaf(test: SampleTest) {
        const node = new LeafNode(test);
        this.children.push(node);
        return node;
    }

    public addSerial(test: TestsGroup) {
        const node = new SerialNode(test);
        this.children.push(node);
        return node;
    }

    public addParallel(test: TestsGroup) {
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

    public abstract run(): Promise<void>;
}
