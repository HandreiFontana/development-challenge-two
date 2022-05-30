import { inject, injectable } from "tsyringe";

import { ICustomerRepository } from "@modules/application/repositories";


@injectable()
class DeleteCustomerUseCase {
    constructor(
        @inject('CustomerRepository')
        private customerRepository: ICustomerRepository
    ) { }

    async execute(id: string): Promise<void> {
        await this.customerRepository.delete(id)

        return
    }
}

export { DeleteCustomerUseCase }