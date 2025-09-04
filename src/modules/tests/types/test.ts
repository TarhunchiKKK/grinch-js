export type Test = {
    title: string;

    success: boolean | null;
};

export type AvailableTestStates = Record<string, unknown> | null;
