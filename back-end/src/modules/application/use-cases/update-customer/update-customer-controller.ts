import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateCustomerUseCase } from './update-customer-use-case'


class UpdateCustomerController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            id,
            name,
            email,
            address,
            birthDate
        } = request.body

        const updateCustomerUseCase = container.resolve(UpdateCustomerUseCase)

        const customer = await updateCustomerUseCase.execute({
            id,
            name,
            email,
            address,
            birthDate
        })

        return response.status(201).json(customer)
    }
}

export { UpdateCustomerController }
