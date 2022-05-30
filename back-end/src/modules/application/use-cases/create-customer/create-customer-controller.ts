import { Request, Response } from 'express'
import { container } from "tsyringe"

import { CreateCustomerUseCase } from "./"


class CreateCustomerController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, birthDateUnformatted, address } = request.body

        const createCustomerUseCase = container.resolve(CreateCustomerUseCase)

        const customer = await createCustomerUseCase.execute({
            name,
            email,
            birthDateUnformatted,
            address
        })

        return response.status(201).json(customer)
    }
}

export { CreateCustomerController }