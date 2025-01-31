import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { GetCustomerUseCase } from './'


class GetCustomerController {
    async handle(request: Request, response: Response): Promise<Response> {
        const id = request.params.id

        const getCustomerUseCase = container.resolve(GetCustomerUseCase)

        const customer = await getCustomerUseCase.execute(id)

        return response.status(200).json(customer)
    }
}

export { GetCustomerController }