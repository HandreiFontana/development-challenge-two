import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuidV4 } from 'uuid'

@Entity('users')
class User {
    @PrimaryColumn()
    id: string

    @Column({ name: 'name', nullable: true })
    name: string

    @Column({ name: 'email', nullable: true })
    email: string

    @Column({ name: 'password', nullable: true })
    password: string

    @Column({ name: 'is_admin', nullable: true })
    isAdmin: boolean

    @CreateDateColumn({ name: 'created_at', nullable: true })
    createdAt: Date

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
        }
    }
}

export { User }
