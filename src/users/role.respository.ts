import { Entity, EntityRepository, Repository } from "typeorm";
import { Role } from "./role.entity";
@EntityRepository(Role)
export class RoleReposioty extends Repository<Role>{

}