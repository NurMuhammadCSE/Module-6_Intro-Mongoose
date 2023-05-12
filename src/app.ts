import express, { Application } from 'express'
import cors from 'cors';

const app: Application = express()

// Application Route 
import router from './app/modules/user/user.route';

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/api/v1/user', router)


export default app;

    /**
     * Step1: Interface
     * Step2: Schema
     * Step3: Model
     * Step4: Database Query
     */
    
/**
 * Pattern MVC, Modular
 * 
 * Interface, Interface.ts
 * Schema, Model -> Model.ts
 * route
 * route function -> controller.ts
 * Database Query Function -> Service
 */