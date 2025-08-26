import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignUpDto } from "./dto/sign-up.dto";
import { SignInDto } from "./dto/sign-in.dto";

@Controller("auth")
export class AuthController {
    public constructor(private readonly authService: AuthService) {}

    @Post("/sign-up")
    @UsePipes(ValidationPipe)
    public signUp(@Body() dto: SignUpDto) {
        return this.authService.signUp(dto);
    }

    @Post("/sign-in")
    @UsePipes(ValidationPipe)
    public signIn(@Body() dto: SignInDto) {
        return this.authService.signIn(dto);
    }
}
