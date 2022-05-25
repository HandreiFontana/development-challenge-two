import { Router } from "express";

import { AuthenticateUserController } from "@modules/authentication/use-cases/authenticate-user";
import { RefreshTokenController } from "@modules/authentication/use-cases/refresh-token";


const authenticateRoutes = Router()
const authenticateUserController = new AuthenticateUserController()
const refreshTokenController = new RefreshTokenController()

authenticateRoutes.post('/sessions', authenticateUserController.handle)
authenticateRoutes.post('/refresh-token', refreshTokenController.handle)

export { authenticateRoutes }