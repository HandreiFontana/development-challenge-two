import { getRepository, Repository } from "typeorm"

import { IUserRepository } from "@modules/authentication/repositories"
import { User } from "../entities"


class UserRepository implements IUserRepository {
    private repository: Repository<User>

    constructor() {
        this.repository = getRepository(User)
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({ email })
        return user
    }

    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne(id)
        return user
    }
}


export { UserRepository }