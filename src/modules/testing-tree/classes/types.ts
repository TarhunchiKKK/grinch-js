import { TestInfo } from "@modules/tests";
import { GroupNode } from "./group-node";

export type TestNode = {
    hasChildren: () => this is GroupNode;

    getInfo: () => TestInfo;

    test: TestInfo;

    run(): Promise<void>;
};
