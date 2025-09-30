import { TestInfo } from "@shared/types";
import { GroupNode } from "./classes/group-node";

export type TestNode = {
    hasChildren: () => this is GroupNode;

    getInfo: () => TestInfo;

    test: TestInfo;

    run(): Promise<void>;
};
