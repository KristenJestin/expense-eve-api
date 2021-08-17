import { DateTime } from 'luxon'
import Factory from '@ioc:Adonis/Lucid/Factory'

import ExpenseModel from 'App/Models/Expense'
import UserModel from 'App/Models/USer'

export const UserFactory = Factory.define(UserModel, ({ faker }) => {
    return {
        name: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    }
})
    .relation('expenses', () => ExpenseFactory)
    .build()

export const ExpenseFactory = Factory.define(ExpenseModel, ({ faker }) => {
    const minCost = 0.15
    const maxCost = 3_000

    return {
        title: faker.commerce.product(),
        cost: randonBm(minCost, maxCost, 6),
        at: DateTime.fromJSDate(faker.date.past(1)),
    }
}).build()

//#region privates
const randonBm = (min: number, max: number, skew: number) => {
    let u = 0
    let v = 0
    while (u === 0) u = Math.random() //Converting [0,1) to (0,1)
    while (v === 0) v = Math.random()
    let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)

    num = num / 10.0 + 0.5 // Translate to 0 -> 1
    if (num > 1 || num < 0) num = randonBm(min, max, skew)
    // resample between 0 and 1 if out of range
    else {
        num = Math.pow(num, skew) // Skew
        num *= max - min // Stretch to fill range
        num += min // offset to min
    }
    return num
}
//#endregion
