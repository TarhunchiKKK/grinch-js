import { DynamicObject } from "../../../shared";

export class TestingResults {
    public results = new DynamicObject<boolean>();

    private static instance: TestingResults | null = null;

    private constructor() {}

    public add(path: string[], value: boolean) {
        this.results.addProperty(path, value);
    }

    public static getInstance() {
        if (!TestingResults.instance) {
            TestingResults.instance = new TestingResults();
        }

        return TestingResults.instance;
    }

    public static getResults() {
        if (!TestingResults.instance) {
            TestingResults.instance = new TestingResults();
        }

        return TestingResults.instance.results.data;
    }
}
