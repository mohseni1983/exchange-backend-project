import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserRoles } from "./role.entity";

@Entity()
export class Controller extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    name:string

    @ManyToMany(()=>UserRoles)
    @JoinTable()
    roles:UserRoles[]
}