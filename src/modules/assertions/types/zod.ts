export type ZodSchema = {
    safeParse: (_: unknown) => { success: boolean };
};
