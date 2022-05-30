import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListCustomerUseCase } from '../list-customer'

import { DeleteCustomerUseCase } from './'


class DeleteCustomerController {
    async handle(request: Request, response: Response): Promise<Response> {
        const id = request.params.id

        const deleteCustomerUseCase = container.resolve(DeleteCustomerUseCase)

        await deleteCustomerUseCase.execute(id)

        // restore list with updated records

        const listCityUseCase = container.resolve(ListCustomerUseCase)

        const customers = await listCityUseCase.execute({
            page: 1,
            rowsPerPage: 20
        })

        return response.json(customers)
    }
}

export { DeleteCustomerController }