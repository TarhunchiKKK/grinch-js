export type TestResult = {
    title: string;
    status: "succeed" | "failed" | "error" | "not runed" | "canceled";
    children?: TestResult[];
};
