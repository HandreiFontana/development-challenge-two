import { Router } from "express";

import { authenticateRoutes } from "./authentication.routes";
import { customersRoutes } from "./customers.routes";


const router = Router()

router.use(authenticateRoutes)
router.use('/customers', customersRoutes)


export { router }