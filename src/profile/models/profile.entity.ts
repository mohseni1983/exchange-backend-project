import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Profile extends BaseEntity{
  @PrimaryGeneratedColumn('uuid')
  id:string
  @Column()
  firstname:string
  @Column()
  lastname:string
  @Column({unique:true})
  national_code:string
  @Column()
  identity_id:string
  @Column()
  father:string
  @Column()
  birth:Date
  @Column({type:"enum",enum:['MALE','FEMALE']})
  gender:GenderType
  @Column()
  profile_images:string
  @Column()
  national_card_image:string
  @Column()
  contract_image:string
}

type GenderType= 'MALE' | 'FEMALE'