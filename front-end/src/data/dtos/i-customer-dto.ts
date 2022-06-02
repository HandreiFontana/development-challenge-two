interface ICustomerDTO {
  id?: string
  name?: string
  email?: string
  address?: string
  birthDate?: Date
  birthDateUnformatted?: string
  createdAt?: Date
  updatedAt?: Date
}

export type { ICustomerDTO }