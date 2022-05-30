import { Router } from 'express'

import { CreateCustomerController } from '@modules/application/use-cases/create-customer'
import { ListCustomerController } from '@modules/application/use-cases/list-customer'
import { UpdateCustomerController } from '@modules/application/use-cases/update-customer/update-customer-controller'


const customersRoutes = Router()

const createCustomerController = new CreateCustomerController()
const listCustomerController = new ListCustomerController()
const updateCustomerController = new UpdateCustomerController()

customersRoutes.post('/', createCustomerController.handle)
customersRoutes.post('/list', listCustomerController.handle)
customersRoutes.put('/', updateCustomerController.handle)


export { customersRoutes }