import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "Grinch",
            fileName: "grinch"
        },
        rollupOptions: {
            external: ["commander"]
        }
    },
    plugins: [
        dts({
            insertTypesEntry: true,
            tsconfigPath: "./tsconfig.build.json"
        })
    ],
    resolve: {
        alias: {
            "@compose": resolve(__dirname, "src/compose"),
            "@modules": resolve(__dirname, "src/modules"),
            "@core": resolve(__dirname, "src/core"),
            "@shared": resolve(__dirname, "src/shared")
        }
    }
});
