import { IsNotEmpty, IsString, Length, Matches } from "class-validator";
import { EMAIL_REGEX } from "src/shared/regex.constants";

export class SignInDto {
    @IsString({ message: "Email should be string" })
    @IsNotEmpty({ message: "Email should not be empty" })
    @Matches(EMAIL_REGEX, { message: "Incorrect email format" })
    public email: string;

    @IsString({ message: "Password should be string" })
    @IsNotEmpty({ message: "Password should be provided" })
    @Length(8, 30, { message: "Password should be from 8 to 30 characters" })
    public password: string;
}
