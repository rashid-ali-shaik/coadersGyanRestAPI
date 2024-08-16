import express from 'express'
import createHttpError from 'http-errors'
import globalErrorHandler from './middlewares/globalErrorHandler'
import userRouter from './user/userRouter'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    const err = createHttpError(200, 'something went wrong')
    throw err
    res.json({ message: 'Hello World' })
})
app.use('/api/user', userRouter)

app.use((req, res) => {
    res.send('unknown')
})
// global error handler
app.use(globalErrorHandler)

export default app
