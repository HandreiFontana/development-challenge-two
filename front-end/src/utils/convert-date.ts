import { ICustomerDTO } from "data/dtos"

export default function convertDate(data: ICustomerDTO) {
  return data.birthDate.toString().substring(0, 10)
}