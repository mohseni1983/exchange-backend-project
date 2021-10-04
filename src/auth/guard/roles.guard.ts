import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from "@nestjs/core";
import { ROLE_KEY } from "../decorators/roles.decorator";
import { RoleEnum } from "../enum/role.enum";
import { User } from "../../users/models/user.entity";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector:Reflector) {
  }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles=this.reflector.getAllAndOverride<RoleEnum[]>(ROLE_KEY,[
      context.getHandler(),
      context.getClass()
    ])
    if(!requiredRoles){
      return true
    }

    const {user}:{user:User}=context.switchToHttp().getRequest()
    return requiredRoles.some((r)=>user.roles?.includes(r))


  }
}
