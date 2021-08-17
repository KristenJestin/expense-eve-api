import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import User from 'App/Models/User'
import { ExpenseFactory } from 'Database/factories'

export default class UserSeeder extends BaseSeeder {
    public static developmentOnly = true

    public async run() {
        const users = await User.createMany([
            {
                name: 'Admin',
                email: 'admin@localhost',
                password: 'secret',
            },
            {
                name: 'User',
                email: 'user@localhost',
                password: 'secret',
            },
        ])

        await ExpenseFactory.merge({
            userId: users[users.length - 1].id,
        }).createMany(32)
    }
}
