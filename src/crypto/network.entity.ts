import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Coin } from "./coin.entity";
@Entity()
export class Network extends BaseEntity{
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
    @Column({default:true})
    enabled:boolean
    @Column()
    default_wallet_address:string
    @Column()
    default_wallet_memo:string
    @Column({default:true})
    manual_deposit:boolean
    @Column({default:false})
    user_wallet_deposit:boolean
    @Column({default:false})
    withdraw:boolean
    @Column({default:false})
    is_netword_fee_fixed:boolean
    @Column()
    fixed_fee:number
    @Column()
    master_wallet_address:string
    @Column()
    master_fee_wallet_private:string
    @Column()
    master_fee_wallet_public:string
}