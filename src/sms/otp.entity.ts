import { type } from "os";
import { timestamp } from "rxjs";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class OtpSms extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string
    @Column({length:5})
    code:string
    @Column({length:11})
    mobile:string
    @Column({type:'timestamp',default: () => 'CURRENT_TIMESTAMP'})
    create_date:Date
}