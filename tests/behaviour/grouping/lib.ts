const DELAY = 3_000;

export async function asyncTask(delay: number = DELAY) {
    await new Promise(resolve => {
        setTimeout(() => resolve(null), delay);
    });
}
