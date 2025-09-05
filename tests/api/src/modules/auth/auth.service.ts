import { BadRequestException, ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { SignUpDto } from "./dto/sign-up.dto";
import { JwtService } from "@nestjs/jwt";
import { SignInDto } from "./dto/sign-in.dto";
import { JwtInfo } from "./types/jwt-info.type";

@Injectable()
export class AuthService {
    public constructor(
        private readonly usersService: UsersService,

        private readonly jwytService: JwtService
    ) {}

    private createJwt(user: JwtInfo) {
        return this.jwytService.sign({
            id: user.id,
            email: user.email,
            username: user.username
        });
    }

    public signUp(dto: SignUpDto) {
        const existingUser = this.usersService.findOneByEmail(dto.email);

        if (existingUser) {
            throw new ConflictException("User with such email already exists");
        }

        const user = this.usersService.create(dto);

        return {
            user,
            jwt: this.createJwt(user)
        };
    }

    public signIn(dto: SignInDto) {
        const user = this.usersService.findOneByEmail(dto.email);

        if (!user) {
            throw new NotFoundException("USer not found");
        }

        if (user.password !== dto.password) {
            throw new BadRequestException("Passwords don't match");
        }

        return {
            user,
            jwt: this.createJwt(user)
        };
    }
}
