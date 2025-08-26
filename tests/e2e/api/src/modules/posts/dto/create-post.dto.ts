import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreatePostDto {
    @IsString({ message: "Title should be string" })
    @IsNotEmpty({ message: "Title should be provided" })
    @MinLength(6, { message: "Title should be longer than 5 characters" })
    public title: string;

    @IsString({ message: "Content should be string" })
    @IsNotEmpty({ message: "Content should be provided" })
    @MinLength(6, { message: "Content should be longer than 5 characters" })
    public content: string;
}
