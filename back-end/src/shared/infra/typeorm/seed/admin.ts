import { hash } from 'bcrypt';
import { v4 as uuidV4 } from 'uuid';

import createConnection from '../';

async function create() {
    const connection = await createConnection();

    const id = uuidV4();
    const password = await hash('admin', 8);

    await connection.query(
        `INSERT INTO users (
            id,
            name,
            email,
            password,
            is_admin,
            created_at
        ) values (
            '${id}',
            'admin',
            'admin@medcloud.com',
            '${password}',
            true,
            'now()'
        )`
    );

    await connection.close();
}

create().then(() => console.log('User admin created!'))