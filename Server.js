import express from 'express'
import morgan from 'morgan'
import UserRoutes from './src/routes/User.Routes.js'
import Configurations from './src/configurations/Configurations.js'
import Middlewares from './src/middlewares/Middlewares.js'
import helmet from 'helmet'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const application = express()
application.use(express.static(path.join(__dirname, 'frontend/build')))
application.use(express.json())
application.use(cors({ credential: true }))
application.use(morgan('common'))
application.use(helmet())


UserRoutes.routes(application)

application.use(Middlewares.notFound)

Configurations.connectToPort(application)
Configurations.connectToDatabase()

export default application