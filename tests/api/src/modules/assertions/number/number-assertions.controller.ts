import { Controller, Get, Param, ParseBoolPipe } from "@nestjs/common";
import { GENERATORS } from "./generators";

@Controller("assertions/number")
export class NumberAssertionsController {
    @Get("to-be-positive/:valid")
    public toBePositive(@Param("valid", ParseBoolPipe) valid: boolean) {
        return valid ? GENERATORS.toBePositive.valid() : GENERATORS.toBePositive.invalid();
    }

    @Get("to-be-negative/:valid")
    public toBeNegative(@Param("valid", ParseBoolPipe) valid: boolean) {
        return valid ? GENERATORS.toBeNegative.valid() : GENERATORS.toBeNegative.invalid();
    }

    @Get("to-be-integer/:valid")
    public toBeInteger(@Param("valid", ParseBoolPipe) valid: boolean) {
        return valid ? GENERATORS.toBeInteger.valid() : GENERATORS.toBeInteger.invalid();
    }

    @Get("to-be-float/:valid")
    public toBeFloat(@Param("valid", ParseBoolPipe) valid: boolean) {
        return valid ? GENERATORS.toBeFloat.valid() : GENERATORS.toBeFloat.invalid();
    }

    @Get("to-be-nan/:valid")
    public toBeNaN(@Param("valid", ParseBoolPipe) valid: boolean) {
        return valid ? GENERATORS.toBeNaN.valid() : GENERATORS.toBeNaN.invalid();
    }

    @Get("to-be-less-than/:valid")
    public toBeLessThan(@Param("valid", ParseBoolPipe) valid: boolean) {
        return valid ? GENERATORS.toBeLessThan.valid() : GENERATORS.toBeLessThan.invalid();
    }

    @Get("to-be-less-than-or-equals/:valid")
    public toBeLessThanOrEquals(@Param("valid", ParseBoolPipe) valid: boolean) {
        return valid ? GENERATORS.toBeLessThanOrEquals.valid() : GENERATORS.toBeLessThanOrEquals.invalid();
    }

    @Get("to-be-grater-than/:valid")
    public toBeGrater(@Param("valid", ParseBoolPipe) valid: boolean) {
        return valid ? GENERATORS.toBeGrater.valid() : GENERATORS.toBeGrater.invalid();
    }

    @Get("to-be-grater-than-or-equals/:valid")
    public toBeGraterOrEquals(@Param("valid", ParseBoolPipe) valid: boolean) {
        return valid ? GENERATORS.toBeGraterOrEquals.valid() : GENERATORS.toBeGraterOrEquals.invalid();
    }

    @Get("to-have-value-between/:valid")
    public toHaveValueBetween(@Param("valid", ParseBoolPipe) valid: boolean) {
        return valid ? GENERATORS.toHaveValueBetween.valid() : GENERATORS.toHaveValueBetween.invalid();
    }
}
