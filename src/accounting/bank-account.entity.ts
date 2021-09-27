import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class BankAccount extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string
    @Column()
    bank_name:string
    @Column()
    account_number:string
    @Column()
    account_sheba:string
    @Column()
    bank_branch:string
    @Column()
    bank_branch_no:string
}