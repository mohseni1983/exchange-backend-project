import {  Injectable } from '@nestjs/common';
import { AuthGuard } from "@nestjs/passport";

// @ts-ignore
@Injectable()
export class JwtGuard extends AuthGuard('jwt'){

}