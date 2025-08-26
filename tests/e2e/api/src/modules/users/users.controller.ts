import { Body, Controller, Get, Patch, Req, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UpdateUserDto } from "./dto/update-user.dto";
import type { AuthorizedRequest } from "../auth/types/request.type";
import { AuthGuard } from "../auth/guards/auth.guard";

@Controller("users")
export class UsersController {
    public constructor(private readonly usersService: UsersService) {}

    @Get("/me")
    @UseGuards(AuthGuard)
    public me(@Req() request: AuthorizedRequest) {
        return this.usersService.findOne(request.jwtInfo.id);
    }

    @Patch(":id")
    @UsePipes(ValidationPipe)
    @UseGuards(AuthGuard)
    public update(@Req() request: AuthorizedRequest, @Body() dto: UpdateUserDto) {
        this.usersService.update(request.jwtInfo.id, dto);
    }
}
