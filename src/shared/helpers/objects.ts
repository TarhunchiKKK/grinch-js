export function deepCompare(value1: unknown, value2: unknown) {
    return JSON.stringify(value1) === JSON.stringify(value2);
}
