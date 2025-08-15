import { Condition } from "../types/conditions";

export const isStringCondition: Condition = (value: unknown) => typeof value === "string";

export const isUpperCaseCondition: Condition = (value: unknown) => {
    if (typeof value !== "string") {
        return "Value is not a string.";
    }

    return value === value.toUpperCase();
};

export const isLowerCaseCondition: Condition = (value: unknown) => {
    if (typeof value !== "string") {
        return "Value is not a string.";
    }

    return value === value.toLocaleLowerCase();
};

export const startsWithCondition: Condition = (substr: string, value: unknown) => {
    if (typeof value !== "string") {
        return "Value is not a string.";
    }

    return value.startsWith(substr);
};

export const endsWithCondition: Condition = (substr: string, value: unknown) => {
    if (typeof value !== "string") {
        return "Value is not a string.";
    }

    return value.endsWith(substr);
};
