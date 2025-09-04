import { SampleTest } from "../../tests";
import { TestNode } from "./types";

export class LeafNode implements TestNode {
    public constructor(public test: SampleTest) {}

    public async run() {}
}
