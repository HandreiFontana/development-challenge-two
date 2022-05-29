import { container } from 'tsyringe'

import '@shared/container/providers'

import {
    IUserRepository,
    IUserTokenRepository
} from '@modules/authentication/repositories'
import {
    UserRepository,
    UserTokenRepository
} from '@modules/authentication/infra/typeorm/repositories'
import {
    ICustomerRepository
} from '@modules/application/repositories'
import {
    CustomerRepository
} from '@modules/application/infra/typeorm/repositories'


container.registerSingleton<IUserRepository>(
    'UserRepository',
    UserRepository
)
container.registerSingleton<IUserTokenRepository>(
    'UserTokenRepository',
    UserTokenRepository
)
container.registerSingleton<ICustomerRepository>(
    'CustomerRepository',
    CustomerRepository
)