import { Controller, Get, Param, ParseBoolPipe } from "@nestjs/common";
import { GENERATORS } from "./generators";

@Controller("assertions/record")
export class RecordAssertionsController {
    @Get("to-equals/:valid")
    public toEquals(@Param("valid", ParseBoolPipe) valid: boolean) {
        return valid ? GENERATORS.toEquals.valid() : GENERATORS.toEquals.invalid();
    }

    @Get("to-have-key/:valid")
    public toHaveKey(@Param("valid", ParseBoolPipe) valid: boolean) {
        return valid ? GENERATORS.toHaveKey.valid() : GENERATORS.toHaveKey.invalid();
    }

    @Get("to-have-all-keys/:valid")
    public toHaveAllKeys(@Param("valid", ParseBoolPipe) valid: boolean) {
        return valid ? GENERATORS.toHaveAllKeys.valid() : GENERATORS.toHaveAllKeys.invalid();
    }

    @Get("to-have-key-with-value/:valid")
    public toHaveKeyWithValue(@Param("valid", ParseBoolPipe) valid: boolean) {
        return valid ? GENERATORS.toHaveKeyWithValue.valid() : GENERATORS.toHaveKeyWithValue.invalid();
    }
}
