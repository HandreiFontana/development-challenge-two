import { ICustomerDTO } from "data/dtos"

export default function convertDate(data: ICustomerDTO) {
    const [dateOnly,] = data.birthDate.toString().split('T')
    const [year, month, day] = dateOnly.split('-')
    const birthDateUnformatted = `${day}/${month}/${year}`

    return birthDateUnformatted
}