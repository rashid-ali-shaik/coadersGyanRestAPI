import { NextFunction, Response, Request } from 'express'
import createHttpError from 'http-errors'

const registerUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        const err = createHttpError(400, 'All fields are required')
        return next(err)
    }
    res.json({ message: 'userCreated' })
}

export { registerUser }
