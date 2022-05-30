import { Router } from 'express'

import { CreateCustomerController } from '@modules/application/use-cases/create-customer'
import { ListCustomerController } from '@modules/application/use-cases/list-customer'
import { UpdateCustomerController } from '@modules/application/use-cases/update-customer/update-customer-controller'
import { GetCustomerController } from '@modules/application/use-cases/get-customer/get-customer-controller'

import { ensureAuthenticated } from '../middlewares/ensure-authenticated'
import { DeleteCustomerController } from '@modules/application/use-cases/delete-customer'


const customersRoutes = Router()

const createCustomerController = new CreateCustomerController()
const listCustomerController = new ListCustomerController()
const updateCustomerController = new UpdateCustomerController()
const getCustomerController = new GetCustomerController()
const deleteCustomerController = new DeleteCustomerController()

customersRoutes.post('/', ensureAuthenticated, createCustomerController.handle)
customersRoutes.post('/list', ensureAuthenticated, listCustomerController.handle)
customersRoutes.put('/', ensureAuthenticated, updateCustomerController.handle)
customersRoutes.get('/:id', ensureAuthenticated, getCustomerController.handle)
customersRoutes.delete('/:id', ensureAuthenticated, deleteCustomerController.handle)


export { customersRoutes }