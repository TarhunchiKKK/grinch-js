import { ReporterTypes } from "../../reporting";

export type ConfigOptions = {
    entryFile: string;

    reporter: ReporterTypes;

    resultsDirectory?: string;
};
