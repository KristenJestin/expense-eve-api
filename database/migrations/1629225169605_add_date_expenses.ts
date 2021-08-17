import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Expenses extends BaseSchema {
    protected tableName = 'expenses'

    public async up() {
        this.schema.table(this.tableName, (table) => {
            table.timestamp('at', { useTz: true }).notNullable().defaultTo(this.now())
        })
    }

    public async down() {
        this.schema.table(this.tableName, (table) => {
            table.dropColumn('at')
        })
    }
}
