import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class UserRoles extends BaseEntity{

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    role_name:string

}