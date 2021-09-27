import { Injectable } from "@nestjs/common";
import { type } from "os";
import * as bcrypt from 'bcrypt'
import { MoneyWallet } from "src/accounting/money-wallet.entity";
import { Payment } from "src/accounting/payments.entity";
import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { AuthCredentialDto } from "../auth/auth-credentials.dto";
import { Role } from "./role.entity";
@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({unique:true})
    username:string

    @Column()
    password:string

    @ManyToMany(type => Role)
    @JoinTable()
    roles:Role[]

    @OneToOne(()=>MoneyWallet)
    @JoinColumn()
    money_wallet:MoneyWallet

    async validatePassword(password:string):Promise<boolean>{
        return await bcrypt.compare(this.password,password)
    }
}

