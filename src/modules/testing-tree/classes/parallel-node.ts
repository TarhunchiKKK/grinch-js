import { TestInfo, TestResult } from "../../tests";
import { TestGroup } from "../../tests/classes/test-group";
import { GroupNode } from "./group-node";

export class ParallelNode extends GroupNode {
    public constructor(test: TestGroup) {
        super(test);
    }

    public getInfo() {
        const childrenInfos = this.children.map(child => child.getInfo());

        if (this.areAllChildrenTestsFailed(childrenInfos)) {
            this.test.result = TestResult.FAILED;
            return this.test;
        }

        for (const info of childrenInfos) {
            switch (info.result) {
                case TestResult.FAILED:
                case TestResult.FORCIBLY_FAILED:
                case TestResult.ERROR_DURING_TEST:
                case TestResult.FORCIBLY_SKIPED:
                case TestResult.PARTIAL_SUCCEED:
                    this.test.result = TestResult.PARTIAL_SUCCEED;
                    return this.test;
            }
        }

        this.test.result = TestResult.SUCCEED;
        return this.test;
    }

    private areAllChildrenTestsFailed(infos: TestInfo[]) {
        for (const info of infos) {
            if (
                !(
                    info.result == TestResult.FAILED ||
                    info.result == TestResult.FORCIBLY_FAILED ||
                    info.result == TestResult.ERROR_DURING_TEST
                )
            ) {
                return false;
            }
        }

        return true;
    }

    public async run() {
        await Promise.allSettled([this.children.map(child => child.run())]);
    }
}
