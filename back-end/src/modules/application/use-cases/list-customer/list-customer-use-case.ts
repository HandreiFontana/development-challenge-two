import { inject, injectable } from "tsyringe";

import { ICustomerRepository } from "@modules/application/repositories";


interface IRequest {
    page: number,
    rowsPerPage: number,
}

@injectable()
class ListCustomerUseCase {
    constructor(
        @inject('CustomerRepository')
        private customerRepository: ICustomerRepository
    ) { }

    async execute({ page, rowsPerPage }: IRequest) {
        const customers = await this.customerRepository.list(
            page,
            rowsPerPage
        )

        return customers
    }
}

export { ListCustomerUseCase }