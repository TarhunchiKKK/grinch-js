const falsyValues = ["", 0, false, null, undefined, NaN];

export const isTrhuthyCondition = (value: unknown) => !falsyValues.includes(value as null);

export const isFalsyCondition = (value: unknown) => falsyValues.includes(value as null);

export const isEmptyCondition = (value: unknown) => value === null || value === undefined;

export const isNotEmptyCondition = (value: unknown) => value !== null && value !== undefined;

export const isNullCondition = (value: unknown) => value === null;

export const isNotNull = (value: unknown) => value !== null;

export const isUndefinedCondition = (value: unknown) => value === undefined;

export const isDefinedCondition = (value: unknown) => value !== undefined;
