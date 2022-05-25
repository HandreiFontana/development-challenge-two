import { IUserTokenDTO } from "../dtos";
import { UserToken } from "../infra/typeorm/entities";

interface IUserTokenRepository {
    create({
        expiresDate,
        refreshToken,
        userId,
    }: IUserTokenDTO): Promise<UserToken>

    findByUserIdAndRefreshToken(
        userId: string,
        refreshToken: string
    ): Promise<UserToken>

    deleteById(id: string): Promise<void>

    findByRefreshToken(refreshToken: string): Promise<UserToken>
}

export { IUserTokenRepository }