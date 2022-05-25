import { Router } from "express";

import { authenticateRoutes } from "./authentication.routes";


const router = Router()

router.use(authenticateRoutes)


export { router }