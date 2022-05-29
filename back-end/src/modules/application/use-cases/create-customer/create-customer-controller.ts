import { Request, Response } from 'express'
import { container } from "tsyringe"

import { CreateCustomerUseCase } from "./"


class CreateCustomerController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, birthDate, address } = request.body

        const createCustomerUseCase = container.resolve(CreateCustomerUseCase)

        const customer = await createCustomerUseCase.execute({
            name,
            email,
            birthDate,
            address
        })

        return response.status(201).json(customer)
    }
}

export { CreateCustomerController }