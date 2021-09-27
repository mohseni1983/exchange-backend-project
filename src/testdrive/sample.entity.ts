import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Sample')
export class Sample{
    @PrimaryGeneratedColumn('uuid')
    private id:string
    @Column()
    private name:string
    @Column()
    private family:string
}