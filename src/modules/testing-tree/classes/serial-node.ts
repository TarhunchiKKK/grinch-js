import { TestResult, TestGroup } from "../../tests";
import { GroupNode } from "./group-node";

export class SerialNode extends GroupNode {
    public constructor(test: TestGroup) {
        super(test);
    }

    public getInfo() {
        const childrenInfos = this.children.map(child => child.getInfo());

        for (const info of childrenInfos) {
            switch (info.result) {
                case TestResult.FAILED:
                case TestResult.FORCIBLY_FAILED:
                case TestResult.ERROR_DURING_TEST:
                    this.test.result = TestResult.FAILED;
                    return this.test;
                case TestResult.FORCIBLY_SKIPED:
                case TestResult.PARTIAL_SUCCEED:
                    this.test.result = TestResult.PARTIAL_SUCCEED;
                    return this.test;
            }
        }

        this.test.result = TestResult.SUCCEED;
        return this.test;
    }

    public async run() {
        for (const child of this.children) {
            await this.runSingle(child);
        }
    }
}
