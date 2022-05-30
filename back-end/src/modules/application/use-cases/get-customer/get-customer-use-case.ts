import { inject, injectable } from "tsyringe";

import { Customer } from "@modules/application/infra/typeorm/entities";
import { ICustomerRepository } from "@modules/application/repositories";


@injectable()
class GetCustomerUseCase {
    constructor(
        @inject('CustomerRepository')
        private customerRepository: ICustomerRepository
    ) { }

    async execute(id: string): Promise<Customer> {
        const customer = await this.customerRepository.get(id)

        return customer
    }
}

export { GetCustomerUseCase }