import { inject, injectable } from "tsyringe"

import { ICustomerRepository } from "@modules/application/repositories"

@injectable()
class CountCustomerUseCase {
    constructor(
        @inject('CustomerRepository')
        private customerRepository: ICustomerRepository
    ) { }

    async execute(): Promise<number> {
        const customersCount = await this.customerRepository.count()

        return customersCount
    }
}

export { CountCustomerUseCase }