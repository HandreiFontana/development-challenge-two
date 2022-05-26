import express from 'express'
import 'reflect-metadata'
import cors from 'cors'

import '@shared/container'
import createConnection from '@shared/infra/typeorm'

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


export { app }