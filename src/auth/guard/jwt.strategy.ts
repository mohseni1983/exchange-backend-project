import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
//import { Strategy } from "passport";
import {ExtractJwt,Strategy} from 'passport-jwt'
import { AuthService } from "../services/auth.service";
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'alimohseni@1362#'
    });
  }

  async validate(payload:any) {
    return { ...payload }
  }
}