import { Router } from 'express'

import { CreateCustomerController } from '@modules/application/use-cases/create-customer'


const customersRoutes = Router()

const createCustomerController = new CreateCustomerController()

customersRoutes.post('/', createCustomerController.handle)


export { customersRoutes }