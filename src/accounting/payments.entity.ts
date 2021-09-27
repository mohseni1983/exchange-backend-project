import { User } from "src/users/user.entity";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { BankAccount } from "./bank-account.entity";
import { MoneyWallet } from "./money-wallet.entity";
@Entity()
export class Payment extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string
    @Column({nullable:false})
    amount:number
    @Column()
    date:Date
    @ManyToOne(()=>MoneyWallet,money_transaction=>money_transaction.payments)
    wallet:MoneyWallet
    @Column({type:'enum',enum:['GATEWAY','FISH','SHEBA']})
    type:PaymentType
    @Column()
    card_number:string
    @Column()
    rrn:string
    @Column()
    fish_no:string
    @OneToOne(type=>BankAccount)
    bank_account:BankAccount
    @Column({type:'enum',enum:['PENDING','PAYED','FAILED'],default:'PENDING'})
    payment_status:PaymentStatus
}

type PaymentType='GATEWAY'| 'FISH' | 'SHEBA'

type PaymentStatus='PENDING' | 'PAYED' | 'FAILED'
