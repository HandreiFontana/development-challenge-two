import { getRepository, Repository } from "typeorm"

import { IUserTokenDTO } from "@modules/authentication/dtos"
import { IUserTokenRepository } from "@modules/authentication/repositories"
import { UserToken } from "../entities"


class UserTokenRepository implements IUserTokenRepository {
    private repository: Repository<UserToken>

    constructor() {
        this.repository = getRepository(UserToken)
    }

    async create({
        expiresDate,
        refreshToken,
        userId,
    }: IUserTokenDTO): Promise<UserToken> {
        const userToken = this.repository.create({
            expiresDate,
            refreshToken,
            userId,
        })

        await this.repository.save(userToken)

        return userToken
    }

    async findByUserIdAndRefreshToken(
        userId: string,
        refreshToken: string
    ): Promise<UserToken> {
        const userToken = await this.repository.findOne({
            userId,
            refreshToken,
        })

        return userToken
    }

    async deleteById(id: string): Promise<void> {
        await this.repository.delete(id)
    }

    async findByRefreshToken(refreshToken: string): Promise<UserToken> {
        const userToken = await this.repository.findOne({ refreshToken })

        return userToken
    }
}

export { UserTokenRepository }