import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "./User"

@Entity()
export class UserAddress {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    address: string

    @Column()
    city: string

    @Column()
    state: string

    @ManyToOne(()=> User, (user)=>user.addresses)
    user: User
}
