import { Module } from "@nestjs/common";
import { PostsService } from "./posts.service";
import { PostsController } from "./posts.controller";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [
        JwtModule.registerAsync({
            useFactory: () => ({
                secret: "jwt_secret",
                signOptions: {
                    expiresIn: "30d"
                }
            })
        })
    ],
    controllers: [PostsController],
    providers: [PostsService]
})
export class PostsModule {}
