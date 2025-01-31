import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm"
import { v4 as uuidv4 } from 'uuid'

import { User } from "./user"


@Entity('user_token')
class UserToken {
    @PrimaryColumn()
    id: string

    @Column({ name: 'refresh_token', nullable: true })
    refreshToken: string

    @ManyToOne(() => User, { nullable: true })
    @JoinColumn({ name: 'user_id' })
    userId: string
    user: User

    @Column({ name: 'expires_date', nullable: true })
    expiresDate: Date

    @CreateDateColumn({ name: 'created_at', nullable: true })
    createdAt: Date

    constructor() {
        if (!this.id) {
            this.id = uuidv4()
        }
    }
}

export { UserToken }