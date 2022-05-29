import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ListCustomerUseCase } from './list-customer-use-case'


class ListCustomerController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { page, rowsPerPage } = request.body

        const listCustomerUseCase = container.resolve(ListCustomerUseCase)

        const customers = await listCustomerUseCase.execute({
            page: page as number,
            rowsPerPage: rowsPerPage as number
        })

        return response.json(customers)
    }
}

export { ListCustomerController }