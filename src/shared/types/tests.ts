export type TestResult = {
    title: string;
    status: "succeed" | "failed" | "error" | "not runed";
    children?: TestResult[];
};
