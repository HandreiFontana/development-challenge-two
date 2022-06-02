import { inject, injectable } from "tsyringe";

import { ICustomerRepository } from "@modules/application/repositories";
import { Customer } from "@modules/application/infra/typeorm/entities";


interface IRequest {
  name: string
  email: string
  birthDateUnformatted: string
  address: string
}

@injectable()
class CreateCustomerUseCase {
  constructor(
    @inject('CustomerRepository')
    private customerRepository: ICustomerRepository
  ) { }

  async execute({ name, email, birthDateUnformatted, address }: IRequest): Promise<Customer> {
    const birthDate = new Date(birthDateUnformatted)

    console.log(birthDateUnformatted)

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