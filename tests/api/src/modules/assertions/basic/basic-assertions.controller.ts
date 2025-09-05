import { Controller, Get, Param, ParseBoolPipe } from "@nestjs/common";
import { GENERATORS } from "./generators";

@Controller("assertions/basic")
export class BasicAssertionsController {
    @Get("/to-be/:valid")
    public toBe(@Param("valid", ParseBoolPipe) valid: boolean) {
        return valid ? GENERATORS.toBe.valid() : GENERATORS.toBe.invalid();
    }

    @Get("/to-be-defined/:valid")
    public toBeDefined(@Param("valid", ParseBoolPipe) valid: boolean) {
        return valid ? GENERATORS.toBeDefined.valid() : GENERATORS.toBeDefined.invalid();
    }

    @Get("/to-be-null/:valid")
    public toBeNull(@Param("valid", ParseBoolPipe) valid: boolean) {
        return valid ? GENERATORS.toBeNull.valid() : GENERATORS.toBeNull.invalid();
    }

    @Get("/to-be-empty/:valid")
    public toBeEmpty(@Param("valid", ParseBoolPipe) valid: boolean) {
        return valid ? GENERATORS.toBeEmpty.valid() : GENERATORS.toBeEmpty.invalid();
    }

    @Get("/to-be-truthy/:valid")
    public toBeTruthy(@Param("valid", ParseBoolPipe) valid: boolean) {
        return valid ? GENERATORS.toBeTruthy.valid() : GENERATORS.toBeTruthy.invalid();
    }

    @Get("/to-be-falsy/:valid")
    public toBeFalsy(@Param("valid", ParseBoolPipe) valid: boolean) {
        return valid ? GENERATORS.toBeFalsy.valid() : GENERATORS.toBeFalsy.invalid();
    }

    @Get("/to-be-in/:valid")
    public toBeIn(@Param("valid", ParseBoolPipe) valid: boolean) {
        return valid ? GENERATORS.toBeIn.valid() : GENERATORS.toBeIn.invalid();
    }
}
