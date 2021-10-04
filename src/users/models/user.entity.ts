import * as bcrypt from "bcrypt";
import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { RoleEnum } from "../../auth/enum/role.enum";
import { CountryEnum } from "../../auth/enum/country.enum";
import { Profile } from "../../profile/models/profile.entity";

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({default:'user'})
    fullname:string

    @Column({unique:true})
    username:string

    @Column()
    password:string

    @Column({type:"enum",enum:RoleEnum,default:[RoleEnum.USER]})
    roles:RoleEnum[]

    @Column({type:"enum",enum:CountryEnum,default:[CountryEnum.IR]})
    countries:CountryEnum[]

    @OneToOne(()=>Profile)
    @JoinColumn()
    profile:Profile



    async validatePassword(password:string):Promise<boolean>{
        //const hashedPass=await bcrypt.hash(password,10)
        return await bcrypt.compare(password, this.password)
    }
}

