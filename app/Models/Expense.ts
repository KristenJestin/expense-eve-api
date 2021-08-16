import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'

import User from 'App/Models/User'

export default class Expense extends BaseModel {
    @column({ isPrimary: true })
    public id: string

    @column()
    public userId: string

    @column()
    public title: string

    @column()
    public cost: number

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime

    @beforeCreate()
    public static async defineId(model: Expense) {
        model.id = uuid()
    }

    @belongsTo(() => User)
    public author: BelongsTo<typeof User>
}
