import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import express from "express";
const app = express()
const PORT: number = 4000
import indexRouter from "./routes/index"
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../swagger.json';

AppDataSource.initialize().then(async () => {

    app.use(express.json())
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    app.use('/',indexRouter)

    app.use(handleUnknownRoutes)

    startApp()

}).catch(error => console.log(error))

const startApp = ()=>{
    try {
        app.listen(PORT,serverInfo)
    } catch (error) {
        throw new Error(error)
    }
}

const serverInfo =()=>{
    console.log("Server started on port: "+PORT);   
}

const handleUnknownRoutes = (req, res)=>{
    return res.send("Oops! Not found")
}