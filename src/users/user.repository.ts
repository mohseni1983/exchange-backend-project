import { ConfigService } from "src/config/config.service";
import { EntityRepository, Repository } from "typeorm";
import { AuthCredentialDto } from "../auth/auth-credentials.dto";
import { RoleReposioty } from "./role.respository";
import { User } from "./user.entity";
import * as bcrypt from 'bcrypt'
import { CreateUserDto } from "./dto/create-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Role } from "./role.entity";

const saltRound=10
@EntityRepository(User)
export class UserRepository extends Repository<User>{
    constructor(
        private readonly configService:ConfigService){
        super();
    }

    async signUp(createUserDto:CreateUserDto):Promise<User>{
        const {username,password}=createUserDto
        const user=new User()
        user.username=username
        const salt= bcrypt.genSaltSync(saltRound)
        user.password= bcrypt.hashSync(password,saltRound)
        let role= await Role.findOne({name:'User'})
        if(!role){
            role= await Role.create({name:'User'})
            await role.save()
        }
         user.roles=[role]  
         await user.save()
         return user
    }
     
    async validateCredentials(authCredentialDto:AuthCredentialDto):Promise<String>{
        const {username,password}=authCredentialDto
        const user=await this.findOne({username})
        if(user && await user.validatePassword(password))
        {
            return user.username
        }else{
            return null
        }
    }
     

}