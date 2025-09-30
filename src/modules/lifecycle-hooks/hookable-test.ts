export abstract class HookableTest {
    public hooks = {
        beforeEach: [] as (() => void | Promise<void>)[],
        afterEach: [] as (() => void | Promise<void>)[]
    };

    public async runBeforeEaches() {
        for (const hook of this.hooks.beforeEach) {
            await hook();
        }
    }

    public async runAfterEaches() {
        for (const hook of this.hooks.afterEach) {
            await hook();
        }
    }
}
