export type Condition = () => boolean;

export type ZodSchema = {
    safeParse: (_: unknown) => { success: boolean };
};
