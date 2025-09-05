import { Body, Controller, Delete, Get, Param, Post, Req, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { PostsService } from "./posts.service";
import { AuthGuard } from "../auth/guards/auth.guard";
import type { AuthorizedRequest } from "../auth/types/request.type";
import { CreatePostDto } from "./dto/create-post.dto";

@Controller("posts")
@UseGuards(AuthGuard)
export class PostsController {
    public constructor(private readonly postsService: PostsService) {}

    @Post()
    @UsePipes(ValidationPipe)
    public create(@Req() request: AuthorizedRequest, @Body() dto: CreatePostDto) {
        return this.postsService.create({
            ...dto,
            userId: request.jwtInfo.id
        });
    }

    @Get()
    @UseGuards(AuthGuard)
    public findAllByUSer(@Req() request: AuthorizedRequest) {
        return this.postsService.findAllByUserId(request.jwtInfo.id);
    }

    @Get(":id")
    public findOne(@Param("id") id: string) {
        return this.postsService.findOne(id);
    }

    @Delete(":id")
    public remove(@Param("id") id: string) {
        this.postsService.remove(id);
    }
}
