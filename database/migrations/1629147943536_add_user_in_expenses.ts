import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Expenses extends BaseSchema {
    protected tableName = 'expenses'

    public async up() {
        this.schema.table(this.tableName, (table) => {
            table.uuid('user_id').notNullable().references('users.id').onDelete('CASCADE')
        })
    }

    public async down() {
        this.schema.table(this.tableName, (table) => {
            table.dropColumn('user_id')
        })
    }
}
