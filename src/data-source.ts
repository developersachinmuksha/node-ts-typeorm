import "reflect-metadata"
import { DataSource } from "typeorm"
import { Category } from "./entity/Category"
import { Question } from "./entity/Question"
import { User } from "./entity/User"
import { UserAddress } from "./entity/UserAddress"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [User,UserAddress,Question,Category],
    migrations: [],
    subscribers: [],
})
