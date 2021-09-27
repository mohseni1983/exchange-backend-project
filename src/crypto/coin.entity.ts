import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Network } from "./network.entity";
@Entity()

export class Coin extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string
    @Column()
    name:string
    @Column()
    farsi_name:string
    @Column()
    symbol:string
    @Column()
    icon:string
    @Column()
    font_icon:string
    @Column()
    enabled:boolean
    @Column()
    wallet_address:string
    @Column()
    wallet_memo:string
    @Column()
    description:string
    @ManyToMany(()=>Network)
    @JoinTable()
    networks:Network[]

}