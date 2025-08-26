import { Module } from "@nestjs/common";
import { AuthModule } from "./modules/auth/auth.module";
import { UsersModule } from "./modules/users/users.module";
import { PostsModule } from "./modules/posts/posts.module";
import { CommonModule } from "./common/common.module";

@Module({
    imports: [AuthModule, UsersModule, PostsModule, CommonModule]
})
export class AppModule {}
