import { Module } from "@nestjs/common";
import { NumberAssertionsController } from "./number-assertions.controller";

@Module({
    controllers: [NumberAssertionsController]
})
export class NumberAssertionsModule {}
