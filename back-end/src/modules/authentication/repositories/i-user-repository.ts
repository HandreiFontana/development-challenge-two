import { User } from "@modules/authentication/infra/typeorm/entities"

interface IUserRepository {
    findByEmail(email: string): Promise<User>
    findById(id: string): Promise<User>
}

export { IUserRepository }