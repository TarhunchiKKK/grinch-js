export type Test = {
    title: string;

    run: () => Promise<void>;
};
