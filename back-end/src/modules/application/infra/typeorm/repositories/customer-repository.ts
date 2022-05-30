import { getRepository, Repository } from "typeorm";

import { ICustomerDTO } from "@modules/application/dtos";
import { ICustomerRepository } from "@modules/application/repositories";
import { AppError } from "@shared/errors/app-error";

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
        const customer = await this.repository.findOne(id)

        if (!customer) {
            throw new AppError('Customer not found')
        }

        return customer
    }

    async update({
        id,
        name,
        email,
        address,
        birthDate
    }: ICustomerDTO): Promise<Customer> {
        const customer = await this.repository.findOne(id)

        if (!customer) {
            throw new AppError('Customer not found')
        }

        const newCustomer = this.repository.create({
            id,
            name,
            email,
            address,
            birthDate
        })

        await this.repository.save(newCustomer)

        return newCustomer
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id)

        return
    }
}

export { CustomerRepository }