import { User } from "src/users/user.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CashOut } from "./cash-out.entity";
import { Payment } from "./payments.entity";
@Entity()
export class MoneyWallet extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string
    @Column({type:'enum',enum:['IN','OUT']})
    direction:Direction
    @Column()
    amount:number
    @Column()
    date:Date
    @Column()
    description:string
    @OneToMany(()=>Payment,payment=>payment.wallet)
    //@JoinColumn()
    payments:Payment[]
    //@JoinColumn()
    @OneToMany(()=>CashOut,cashout=>cashout.wallet)
    cashouts:CashOut[]

}
type Direction = 'IN' | 'OUT'