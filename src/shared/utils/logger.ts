export class Logger {
    public static success(message: string) {
        console.log("\x1b[32m%s\x1b[0m", message, "\n");
    }

    public static failure(message: string) {
        console.log("\x1b[31m%s\x1b[0m", message, "\n");
    }
}
