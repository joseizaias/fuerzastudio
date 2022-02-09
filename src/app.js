const express = require('express')
const dotenv = require('dotenv')
const swaggerUiExpress = require('swagger-ui-express')

const swaggerDocs = require('./swagger.json')
const errorHandler = require('./middlewares/error')
const connectDB = require('./config/db')

/// Load env vars
dotenv.config({ path: './src/config/config.env' })

/// Connect to database
connectDB()

/// Route files
const posts = require('./routes/api/posts')
const logins = require('./routes/api/login')

const app = express()

/// Body parser (MiddleWare to parse body)
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

/// @Swagger
app.use('/api/swagger', swaggerUiExpress.serve, swaggerUiExpress.setup( swaggerDocs ))

/// Mount routers
app.use('/api/posts', posts)

/// Just one mock user to use JWT
app.use('/api/login', logins)

/// error Handler MiddleWare (precisa ser adicionado depois da rota onde se deseja aplicar o MiddleWare)
app.use(errorHandler)

module.exports = app
