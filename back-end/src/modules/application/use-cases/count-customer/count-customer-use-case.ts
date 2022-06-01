import { inject, injectable } from "tsyringe"

import { ICustomerRepository } from "@modules/application/repositories"

@injectable()
class CountCustomerUseCase {
    constructor(
        @inject('CustomerRepository')
        private customerRepository: ICustomerRepository
    ) { }

    async execute(): Promise<number> {
        console.log("customersCount")
        const customersCount = await this.customerRepository.count()

        return customersCount
    }
}

export { CountCustomerUseCase }