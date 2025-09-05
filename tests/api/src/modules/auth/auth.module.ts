import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { UsersModule } from "../users/users.module";

@Module({
    imports: [
        JwtModule.registerAsync({
            useFactory: () => ({
                secret: "jwt_secret",
                signOptions: {
                    expiresIn: "30d"
                }
            })
        }),
        UsersModule
    ],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}
