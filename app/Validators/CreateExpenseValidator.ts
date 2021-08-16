import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateExpenseValidator {
    constructor(protected ctx: HttpContextContract) {}

    public schema = schema.create({
        title: schema.string({ trim: true }, [rules.maxLength(254)]),
        cost: schema.number([rules.unsigned()]),
    })

    public messages = {
        'title.required': 'Enter the expense title',
        'cost.required': 'Enter the expense cost',
        'cost.number': 'Expense cost must be represented in number',
    }
}
