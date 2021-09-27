import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { MoneyWallet } from "./money-wallet.entity";
@Entity()
export class CashOut extends BaseEntity{

    @PrimaryGeneratedColumn('uuid')
    id:string
    @Column()
    amount:number
    @Column()
    date:Date
    @Column()
    recipt_no:string
    @Column({type:'enum',enum:['SHEBA' , 'CARD' , 'VARIZ']})
    through:CashOutTrought
    @ManyToOne(()=>MoneyWallet,transaction=>transaction.cashouts)
    wallet:MoneyWallet
}

type CashOutTrought='SHEBA' | 'CARD' | 'VARIZ'