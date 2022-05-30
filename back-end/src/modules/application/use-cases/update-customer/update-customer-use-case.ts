import { inject, injectable } from "tsyringe";

import { ICustomerRepository } from "@modules/application/repositories";
import { Customer } from "@modules/application/infra/typeorm/entities";


interface IRequest {
    id: string
    name: string
    email: string
    address: string
    birthDate: Date
}

@injectable()
class UpdateCustomerUseCase {
    constructor(
        @inject('CustomerRepository')
        private customerRepository: ICustomerRepository
    ) { }

    async execute({
        id,
        name,
        email,
        address,
        birthDate,
    }: IRequest): Promise<Customer> {
        const customer = await this.customerRepository.update({
            id,
            name,
            email,
            address,
            birthDate
        })

        return customer
    }
}

export { UpdateCustomerUseCase }