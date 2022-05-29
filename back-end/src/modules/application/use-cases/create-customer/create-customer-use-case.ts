import { inject, injectable } from "tsyringe";

import { ICustomerRepository } from "@modules/application/repositories";
import { Customer } from "@modules/application/infra/typeorm/entities";


interface IRequest {
    name: string
    email: string
    birthDate: Date
    address: string
}

@injectable()
class CreateCustomerUseCase {
    constructor(
        @inject('CustomerRepository')
        private customerRepository: ICustomerRepository
    ) { }

    async execute({ name, email, birthDate, address }: IRequest): Promise<Customer> {
        const customer = await this.customerRepository.create({
            name,
            email,
            birthDate,
            address
        })

        return customer
    }
}

export { CreateCustomerUseCase }