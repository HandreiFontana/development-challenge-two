import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CountCustomerUseCase } from './count-customer-use-case'


class CountCustomerController {
    async handle(request: Request, response: Response): Promise<Response> {
        console.log("1")
        const countCustomerUseCase = container.resolve(CountCustomerUseCase)
        console.log("2")

        const customersCount = await countCustomerUseCase.execute()

        return response.json({ count: customersCount })
    }
}

export { CountCustomerController }