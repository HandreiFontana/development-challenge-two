import { ICustomerDTO } from "../dtos";
import { Customer } from "../infra/typeorm/entities";

interface ICustomerRepository {
    create(data: ICustomerDTO): Promise<Customer>
    list(
        page: number,
        rowsPerPage: number
    ): Promise<Customer[]>
    get(id: string): Promise<Customer>
    update(data: ICustomerDTO): Promise<Customer>
    delete(id: string): Promise<void>
}

export { ICustomerRepository }