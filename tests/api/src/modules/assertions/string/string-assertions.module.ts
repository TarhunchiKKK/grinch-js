import { Module } from "@nestjs/common";
import { StringAssertionsController } from "./string-assertions.controller";

@Module({
    controllers: [StringAssertionsController]
})
export class StringAssertionsModule{}