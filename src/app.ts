import express, { Request, Response, NextFunction } from 'express'
import createHttpError, { HttpError } from 'http-errors'

const app = express()

app.get('/', (req, res) => {
    const err = createHttpError.Unauthorized()
    throw err
    res.json({ message: 'Hello World' })
})

app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500

    res.status(statusCode).json({
        message: err.message,
        errStack: process.env.NODE_ENV === 'production' ? '🤫' : err.stack,
    })
})

export default app
