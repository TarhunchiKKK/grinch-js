import { TestCase, TestsGroup } from "@modules/tests";
import { LeafNode } from "./leaf-node";
import { ParallelNode } from "./parallel-node";
import { SerialNode } from "./serial-node";
import { TestNode } from "../types";
import { HookableTest } from "@modules/lifecycle-hooks";
import { TestStatus } from "@shared/lib";

export abstract class GroupNode extends HookableTest {
    public children: TestNode[] = [];

    public constructor(public test: TestsGroup) {
        super();
    }

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

    public addLeaf(test: TestCase) {
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
        await this.runBeforeEaches();

        await node.run();

        await this.runAfterEaches();
    }

    public abstract run(): Promise<void>;
}
