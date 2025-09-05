import { Controller, Post } from "@nestjs/common";
import { CommonService } from "./common.service";

@Controller("common")
export class CommonController {
    public constructor(private readonly commonService: CommonService) {}

    @Post("/hard")
    public hardTask() {
        this.commonService.hardTask();
    }
}
