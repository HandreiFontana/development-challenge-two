import { Router } from 'express'

import { CreateCustomerController } from '@modules/application/use-cases/create-customer'
import { ListCustomerController } from '@modules/application/use-cases/list-customer'


const customersRoutes = Router()

const createCustomerController = new CreateCustomerController()
const listCustomerController = new ListCustomerController()

customersRoutes.post('/', createCustomerController.handle)
customersRoutes.post('/list', listCustomerController.handle)


export { customersRoutes }