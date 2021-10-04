import { Controller, Get, UseGuards } from "@nestjs/common";
import { Roles } from "../auth/decorators/roles.decorator";
import { RoleEnum } from "../auth/enum/role.enum";
import { RolesGuard } from "../auth/guard/roles.guard";
import { JwtGuard } from "../auth/guard/jwt.guard";
import { Countries } from "../auth/decorators/countries.decorator";
import { CountryEnum } from "../auth/enum/country.enum";
import { CountryGuard } from "../auth/guard/country.guard";
import { Reflector } from "@nestjs/core";
import {RealIP} from 'nestjs-real-ip'
@Controller('testapi')
export class TestapiController {
  constructor(private readonly reflector:Reflector){

  }

  @Roles(RoleEnum.ADMIN)
  @Countries(CountryEnum.IR)
  @UseGuards(JwtGuard,RolesGuard,CountryGuard)
  @Get()
  getTest(@RealIP() ip: string){
    return ip
  }

}


