import { getRepository, Repository } from "typeorm";

import { ICustomerDTO } from "@modules/application/dtos";
import { ICustomerRepository } from "@modules/application/repositories";

import { Customer } from "../entities";


class CustomerRepository implements ICustomerRepository {
    private repository: Repository<Customer>

    constructor() {
        this.repository = getRepository(Customer)
    }

    async create({ name, email, birthDate, address }): Promise<Customer> {
        const customer = this.repository.create({
            name,
            email,
            birthDate,
            address
        })

        await this.repository.save(customer)

        return customer
    }

    async list(page: number, rowsPerPage: number): Promise<Customer[]> {
        const customers = await this.repository.createQueryBuilder('cus')
            .select([
                'cus.id as id',
                'cus.name as name',
                'cus.email as email',
                'cus.birth_date as birthDate',
                'cus.address as address'
            ])
            .addOrderBy('cus.name')
            .offset(rowsPerPage * (page - 1))
            .limit(rowsPerPage)
            .getRawMany()

        return customers
    }

    async get(id: string): Promise<Customer> {
        throw new Error("Method not implemented.");
    }

    async update(data: ICustomerDTO): Promise<Customer> {
        throw new Error("Method not implemented.");
    }

}

export { CustomerRepository }