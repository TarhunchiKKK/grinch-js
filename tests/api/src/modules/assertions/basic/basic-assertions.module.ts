import { Module } from "@nestjs/common";
import { BasicAssertionsController } from "./basic-assertions.controller";

@Module({
    controllers: [BasicAssertionsController]
})
export class BasicAssertionsModule {}
