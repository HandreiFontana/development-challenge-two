import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'


@Entity('customers')
class Customer {
  @PrimaryColumn()
  id?: string

  @Column({ name: 'name', nullable: true })
  name?: string

  @Column({ name: 'email', nullable: true })
  email?: string

  @CreateDateColumn({ name: 'birth_date', nullable: true })
  birthDate?: Date

  @Column({ name: 'address', nullable: true })
  address?: string

  @CreateDateColumn({ name: 'created_at', nullable: true })
  createdAt?: Date

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt?: Date

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}

export { Customer }