/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService) {}

    public canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();

        const authHeaders: string = request.headers.authorization;
        const [bearer, token] = authHeaders.split(" ");

        if (bearer !== "Bearer" || !token) {
            throw new UnauthorizedException("Unauthorized");
        }

        const jwtInfo = this.jwtService.verify(token);
        request["jwtInfo"] = jwtInfo;
        return true;
    }
}
