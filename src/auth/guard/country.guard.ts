import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { RoleEnum } from "../enum/role.enum";
import { ROLE_KEY } from "../decorators/roles.decorator";
import { User } from "../../users/models/user.entity";
import { Reflector } from "@nestjs/core";
import { CountryEnum } from "../enum/country.enum";
import { COUNTRY_KEY } from "../decorators/countries.decorator";

@Injectable()
export class CountryGuard implements CanActivate {
  constructor(private readonly reflector:Reflector) {
  }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredCountries=this.reflector.getAllAndOverride<CountryEnum[]>(COUNTRY_KEY,[
      context.getHandler(),
      context.getClass()
    ])
    if(!requiredCountries){
      return true
    }

    const {user}:{user:User}=context.switchToHttp().getRequest()
    const res= requiredCountries.some(
      (r)=>user.countries?.includes(r)
    )
    return res

  }
}
