export class Logger {
    public static green(message: string) {
        console.log("\x1b[32m%s\x1b[0m", message, "\n");
    }

    public static yellow(message: string) {
        console.log("\x1b[33m%s\x1b[0m", message, "\n");
    }

    public static red(message: string) {
        console.log("\x1b[31m%s\x1b[0m", message, "\n");
    }
}
