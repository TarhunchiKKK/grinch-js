import { Request } from "express";
import { JwtInfo } from "./jwt-info.type";

export type AuthorizedRequest = Request & {
    jwtInfo: JwtInfo;
};
