import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
@Entity()
@Unique(['name'])
export class Role extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string
    @Column()
    name:string
}