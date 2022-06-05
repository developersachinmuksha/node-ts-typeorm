import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { UserAddress } from "./UserAddress"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @OneToMany(()=>UserAddress,(userAddress) => userAddress.user)
    addresses: UserAddress[]
}
