import { ConfigService } from "src/config/services/config.service";
import { EntityRepository, Repository } from "typeorm";
import { AuthCredentialDto } from "../../auth/dto/auth-credentials.dto";
import { User } from "../models/user.entity";
import * as bcrypt from "bcrypt";
import { CreateUserDto } from "../dto/create-user.dto";
import { RoleEnum } from "../../auth/enum/role.enum";

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

         user.roles=[RoleEnum.USER]
         await user.save()
         return user
    }
     
    async validateCredentials(authCredentialDto:AuthCredentialDto):Promise<User>{
        const {username,password}=authCredentialDto
        const user=await this.findOne({username},)
        if(user && await user.validatePassword(password))
        {
            delete user.password
            return user
        }else{
            return null
        }
    }
     

}