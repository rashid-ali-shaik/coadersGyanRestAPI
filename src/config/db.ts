import mongoose from 'mongoose'
import { config } from './config'

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log('connected to db')
        })
        mongoose.connection.on('error', (error) => {
            console.error('failed to connect to db', error)
        })
        await mongoose.connect(config.dbString as string)
    } catch (error) {
        console.error('failed to connect to db', error)
        process.exit(1)
    }
}

export default connectDB
