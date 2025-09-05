import { Module } from "@nestjs/common";
import { RecordAssertionsController } from "./record-assertions.controller";

@Module({
    controllers: [RecordAssertionsController]
})
export class RecordAssertionsModule{}