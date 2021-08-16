import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import ExpenseModel from 'App/Models/Expense'
import CreateExpenseValidator from 'App/Validators/CreateExpenseValidator'
import RecordNotFoundException from 'App/Exceptions/RecordNotFoundException'

export default class ExpensesController {
    public async index({ request, auth, response }: HttpContextContract) {
        // get page
        let page = Number(request.input('page'))
        page = isNaN(page) || page < 1 ? 1 : page

        // data
        const expenses = await ExpenseModel.query()
            .where('user_id', auth.user!.id)
            .orderBy('createdAt', 'desc')

        // response
        return response.json(expenses)
    }

    public async store({ request, auth, response }: HttpContextContract) {
        // request data
        const data = await request.validate(CreateExpenseValidator)

        // object
        const expense = await auth.user!.related('expenses').create(data)

        // response
        return response.created(expense)
    }

    public async show({ params, auth, response }: HttpContextContract) {
        // data
        const expense = await ExpenseModel.find(params.id)

        // check if user own it
        if (!expense || expense.userId !== auth.user!.id) throw new RecordNotFoundException()

        // response
        return response.json(expense)
    }

    public async update({ request, params, auth, response }: HttpContextContract) {
        // request data
        const data = await request.validate(CreateExpenseValidator)

        // object
        const expense = await ExpenseModel.find(params.id)

        // check if user own it
        if (!expense || expense.userId !== auth.user!.id) throw new RecordNotFoundException()

        // database
        expense.merge(data)
        await expense.save()

        // response
        return response.accepted(expense)
    }

    public async destroy({ params, auth, response }: HttpContextContract) {
        // object
        const expense = await ExpenseModel.find(params.id)

        // check if user own it
        if (!expense || expense.userId !== auth.user!.id) throw new RecordNotFoundException()

        // database
        await expense.delete()

        // reponse
        return response.noContent()
    }
}
