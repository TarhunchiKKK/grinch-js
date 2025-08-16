/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

type ResultValue = boolean | string;

export class TestingResults {
    public results: Record<string, any> = {};

    public addResult(path: string[], value: ResultValue) {
        let pointer = this.results;

        for (let i = 0; i < path.length - 1; i++) {
            const key = path[i];

            if (!pointer[key]) {
                pointer[key] = {};
            }

            pointer = pointer[key];
        }

        const lastKey = path[path.length - 1];
        pointer[lastKey] = value;
    }
}
