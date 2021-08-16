import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import ExpenseModel from 'App/Models/Expense'
import CreateExpenseValidator from 'App/Validators/CreateExpenseValidator'

export default class ExpensesController {
    public async index({ request, response }: HttpContextContract) {
        // get page
        let page = Number(request.input('page'))
        page = isNaN(page) || page < 1 ? 1 : page

        // data
        const expenses = await ExpenseModel.query().orderBy('createdAt', 'desc')

        // response
        return response.json(expenses)
    }

    public async store({ request, response }: HttpContextContract) {
        // request data
        const data = await request.validate(CreateExpenseValidator)

        // object
        const expense = await ExpenseModel.create(data)

        // response
        return response.created(expense)
    }

    public async show({ params, response }: HttpContextContract) {
        // data
        const expense = await ExpenseModel.findOrFail(params.id)

        // response
        return response.json(expense)
    }

    public async update({ request, params, response }: HttpContextContract) {
        // request data
        const data = await request.validate(CreateExpenseValidator)

        // object
        const expense = await ExpenseModel.findOrFail(params.id)

        // database
        expense.merge(data)
        await expense.save()

        // response
        return response.accepted(expense)
    }

    public async destroy({ params, response }: HttpContextContract) {
        // object
        const expense = await ExpenseModel.findOrFail(params.id)

        // TODO: check if user own expense

        // database
        await expense.delete()

        // reponse
        return response.noContent()
    }
}
