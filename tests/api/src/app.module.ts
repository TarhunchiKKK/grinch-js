import { Module } from "@nestjs/common";
import { AuthModule } from "./modules/auth/auth.module";
import { UsersModule } from "./modules/users/users.module";
import { PostsModule } from "./modules/posts/posts.module";
import { CommonModule } from "./common/common.module";
import { BasicAssertionsModule } from "./modules/assertions/basic/basic-assertions.module";
import { NumberAssertionsModule } from "./modules/assertions/number/number-assertions.module";

@Module({
    imports: [AuthModule, UsersModule, PostsModule, CommonModule, BasicAssertionsModule, NumberAssertionsModule]
})
export class AppModule {}
