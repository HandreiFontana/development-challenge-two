import { Router } from "express";

import { AuthenticateUserController } from "@modules/authentication/use-cases/authenticate-user";


const authenticateRoutes = Router()
const authenticateUserController = new AuthenticateUserController()

authenticateRoutes.post('/sessions', authenticateUserController.handle)

export { authenticateRoutes }