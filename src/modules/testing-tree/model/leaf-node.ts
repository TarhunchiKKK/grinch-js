import { SampleTest } from "../../tests";
import { TestNode } from "./types";

export class LeafNode<State> implements TestNode {
    public constructor(public test: SampleTest<State>) {}

    public async run() {}
}
