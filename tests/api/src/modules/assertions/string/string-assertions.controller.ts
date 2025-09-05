import { Controller, Get, Param, ParseBoolPipe } from "@nestjs/common";
import { GENERATORS } from "./generators";

@Controller("assertions/string")
export class StringAssertionsController {
    @Get("to-be-upper-case/:valid")
    public toBeUpperCase(@Param("valid", ParseBoolPipe) valid: boolean) {
        return valid ? GENERATORS.toBeUpperCase.valid() : GENERATORS.toBeUpperCase.invalid();
    }

    @Get("to-be-lower-case/:valid")
    public toBeLowerCase(@Param("valid", ParseBoolPipe) valid: boolean) {
        return valid ? GENERATORS.toBeLowerCase.valid() : GENERATORS.toBeLowerCase.invalid();
    }

    @Get("to-starts-with/:valid")
    public toStartsWith(@Param("valid", ParseBoolPipe) valid: boolean) {
        return valid ? GENERATORS.toStartsWith.valid() : GENERATORS.toStartsWith.invalid();
    }

    @Get("to-ends-with/:valid")
    public toEndsWith(@Param("valid", ParseBoolPipe) valid: boolean) {
        return valid ? GENERATORS.toEndsWith.valid() : GENERATORS.toEndsWith.invalid();
    }

    @Get("to-be-numeric-string/:valid")
    public toBeNumericString(@Param("valid", ParseBoolPipe) valid: boolean) {
        return valid ? GENERATORS.toBeNumericString.valid() : GENERATORS.toBeNumericString.invalid();
    }

    @Get("to-be-boolean-string/:valid")
    public toBeBooleanString(@Param("valid", ParseBoolPipe) valid: boolean) {
        return valid ? GENERATORS.toBeBooleanString.valid() : GENERATORS.toBeBooleanString.invalid();
    }

    @Get("to-be-uuid/:valid")
    public toBeUUID(@Param("valid", ParseBoolPipe) valid: boolean) {
        return valid ? GENERATORS.toBeUUID.valid() : GENERATORS.toBeUUID.invalid();
    }

    @Get("to-have-length/:valid")
    public toHaveLength(@Param("valid", ParseBoolPipe) valid: boolean) {
        return valid ? GENERATORS.toHaveLength.valid() : GENERATORS.toHaveLength.invalid();
    }

    @Get("to-be-shorter-than/:valid")
    public toBeShorterThan(@Param("valid", ParseBoolPipe) valid: boolean) {
        return valid ? GENERATORS.toBeShorterThan.valid() : GENERATORS.toBeShorterThan.invalid();
    }

    @Get("to-be-shorter-than=or-equals/:valid")
    public toBeShorterThanOrEquals(@Param("valid", ParseBoolPipe) valid: boolean) {
        return valid ? GENERATORS.toBeShorterThanOrEquals.valid() : GENERATORS.toBeShorterThanOrEquals.invalid();
    }

    @Get("to-be-longer-than/:valid")
    public toBeLongerThan(@Param("valid", ParseBoolPipe) valid: boolean) {
        return valid ? GENERATORS.toBeLongerThan.valid() : GENERATORS.toBeLongerThan.invalid();
    }

    @Get("to-be-longer-than-or-equals/:valid")
    public toBeLongerThanOrEquals(@Param("valid", ParseBoolPipe) valid: boolean) {
        return valid ? GENERATORS.toBeLongerThanOrEquals.valid() : GENERATORS.toBeLongerThanOrEquals.invalid();
    }

    @Get("to-have-length-between/:valid")
    public toHaveLengthBetween(@Param("valid", ParseBoolPipe) valid: boolean) {
        return valid ? GENERATORS.toHaveLengthBetween.valid() : GENERATORS.toHaveLengthBetween.invalid();
    }

    @Get("to-includes/:valid")
    public toIncludes(@Param("valid", ParseBoolPipe) valid: boolean) {
        return valid ? GENERATORS.toIncludes.valid() : GENERATORS.toIncludes.invalid();
    }

    @Get("to-have-value-at-index/:valid")
    public toHaveValueAtIndex(@Param("valid", ParseBoolPipe) valid: boolean) {
        return valid ? GENERATORS.toHaveValueAtIndex.valid() : GENERATORS.toHaveValueAtIndex.invalid();
    }
}
