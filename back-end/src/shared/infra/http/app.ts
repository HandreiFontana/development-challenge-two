import express, { Request, Response, NextFunction } from 'express'
import 'reflect-metadata'
import cors from 'cors'

import '@shared/container'
import createConnection from '@shared/infra/typeorm'
import { AppError } from '@shared/errors/app-error'

import { router } from './routes'


createConnection()
const app = express()

app.use(express.json())

// cors

const allowedOrigins = ['http://localhost:3000']

const options: cors.CorsOptions = {
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}

app.use(cors(options))

//

app.use(router)

// AppError

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            message: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`,
    })
});

//


export { app }