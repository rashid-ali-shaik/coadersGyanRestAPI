import { config as dotenvConfig } from 'dotenv'
dotenvConfig()

const _config = {
    port: process.env.PORT,
    dbString: process.env.CONNECTION_STRING,
    env: process.env.NODE_ENV,
}

export const config = Object.freeze(_config)
