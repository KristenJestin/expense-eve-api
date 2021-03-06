import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LoginController {
    public async store({ request, auth }: HttpContextContract) {
        // request data
        const email = request.input('email')
        const password = request.input('password')

        // response
        const data = await auth.use('api').attempt(email, password, {
            expiresIn: '7days',
        })
        return {
            type: data.type,
            token: data.token,
            expire_at: data.expiresAt,
            user_id: data.user.id,
        }
    }

    public async destroy({ auth, response }: HttpContextContract) {
        // auth
        await auth.use('api').revoke()

        // response
        return response.noContent()
    }
}
