export class Logger {
    public static info(message: unknown) {
        console.log(message);
    }

    public static green(message: unknown) {
        console.log("\x1b[32m%s\x1b[0m", message, "\n");
    }

    public static yellow(message: unknown) {
        console.log("\x1b[33m%s\x1b[0m", message, "\n");
    }

    public static red(message: unknown) {
        console.log("\x1b[31m%s\x1b[0m", message, "\n");
    }

    public static blur(message: unknown) {
        console.log("\x1b[2m%s\x1b[0m", message);
    }
}
